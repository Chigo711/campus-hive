import { Text } from "react-native"; // Import Text from react-native for fallback

// import AddPost from "./AddPost"; // Import AddPost icon
// import Apple from "./Apple"; // Import Apple icon if needed
// import ArrowLeft from "./ArrowLeft";
// import Chat from "./Chat"; // Import other icons as needed
// import Delete from "./Delete"; // Import Delete icon if needed
// import Facebook from "./Facebook"; // Import Facebook icon if needed
// import Goggle from "./Google"; // Import Google icon if needed
// import Home from "./Home";
// import HomeSolid from "./HomeSolid"; // Assuming Home is the icon you want to use
// import Lock from "./Lock"; // Import Lock icon if needed
// import Mail from "./Mail"; // Import Mail icon
// import Person from "./Person";
// import Profile from "./Profile";
// import Bag from "./bag";
// import BagBold from "./bagBold";
// import Explore from "./explore";
// import ExploreBold from "./exploreBold";
// import Heart from "./heart";
// import HomeBold from "./homeBold";
// import ProfileBold from "./profileBold"; // Import ProfileBold icon
// import Search from "./search";
// const icons = {
//   home: Home,
//   homeSold: HomeSolid,
//   chat: Chat,
//   addPost: AddPost,
//   delete: Delete,
//   profile: Profile,
//   arrowLeft: ArrowLeft,
//   mail: Mail, // Add Mail icon to the icons object
//   lock: Lock, // Add Lock icon to the icons object
//   facebook: Facebook, // Add Facebook icon to the icons object
//   google: Goggle, // Add Google icon to the icons object
//   apple: Apple, // Add Apple icon to the icons object
//   person: Person,
//   heart: Heart,
//   search: Search,
//   exploreBold: ExploreBold,
//   explore: Explore,
//   bag: Bag,
//   bagBold: BagBold,
//   homeBold: HomeBold,
//   profileBold: ProfileBold, // Add ProfileBold icon to the icons object
// };
// const icons: Record<string, React.ComponentType<any>> = { ... };
import Explore from "./Explore";
import ExploreBold from "./ExploreBold";
import Fire from "./Fire"; // Import Fire icon if needed
import FireBold from "./FireBold"; // Import FireBold icon if needed
import Group from "./Group";
import GroupBold from "./GroupBold";
import Home from "./Home";
import HomeBold from "./HomeBold";
import Message from "./Message";
import MessageBold from "./MessageBold";
import ShoppingBag from "./ShoppingBag";
import ShoppingBagBold from "./ShoppingBagBold";

const icons = {
  home: Home,
  homeBold: HomeBold,
  bag: ShoppingBag,
  bagBold: ShoppingBagBold,
  message: Message,
  messageBold: MessageBold,
  explore: Explore,
  exploreBold: ExploreBold,
  group: Group,
  groupBold: GroupBold,
  fire: Fire, // Add Fire icon to the icons object
  fireBold: FireBold, // Add FireBold icon to the icons object
};

const Icons = ({ name, ...props }) => {
  //   const IconsComponent = icons[name];
  const FallbackIcon = () => <Text style={{ fontSize: 12 }}>❓</Text>; // or a placeholder SVG
  const IconsComponent = icons[name] || FallbackIcon;

  return (
    <IconsComponent
      height={props.size || 24}
      weight={props.size || 24}
      strokeWidth={props.strokeWidth || 1}
      color={props.color}
      {...props}
    />
  );
};

export default Icons;
