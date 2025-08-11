import {View, Text} from 'react-native';
import ScreenWrapper from "@/components/ScreenWrapper"
import {hp} from "@/helpers/common"
function Market(){
    return (
        <ScreenWrapper>
            <View style={{paddingHorizontal: hp(2)}}>
                <Text>Welcome to the Market Screen</Text>
            </View>
        </ScreenWrapper>
    )
}

export default Market