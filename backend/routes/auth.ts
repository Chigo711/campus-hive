import { Request, Response, Router } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User';
import { Types } from 'mongoose'

const router = Router();

interface IUser {
    _id: Types.ObjectId;
    email: string;
    password: string;
}

// Signup (Only allows @alustudent.com emails)
router.post('/signup', async (req: Request, res: Response) => {
    const { email, password } = req.body;

    try {
        if (!email.endsWith('@alustudent.com')) {
            return res.status(400).json({ error: 'Only ALU student emails allowed!' });
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(400).json({ error: 'Email already in use!' });

        const hashedPassword = await bcrypt.hash(password, 12);
        const user: IUser = await User.create({ email, password: hashedPassword });

        const token = jwt.sign({ id: user._id }, 'yourSecretKey', { expiresIn: '1h' });
        res.status(201).json({ token, user });
    } catch (err: any) {
        res.status(500).json({ error: err.message });
    }
});

// Login
router.post('/login', async (req: Request, res: Response) => {
    const { email, password } = req.body;

    try {
        const user: IUser | null = await User.findOne({ email });
        if (!user) return res.status(400).json({ error: 'Invalid credentials!' });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ error: 'Invalid credentials!' });

        const token = jwt.sign({ id: user._id }, 'yourSecretKey', { expiresIn: '1h' });
        res.json({ token, user });
    } catch (err: any) {
        res.status(500).json({ error: err.message });
    }
});

export default router;