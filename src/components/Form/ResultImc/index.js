import React from "react"
import {View, Text, TouchableOpacity, Share} from "react-native"
import styles from "./style"

export default function ResultImc(props){

    const onShare = async() => {
        const result = await Share.share({
            message:"Meu IMC é: "+props.resultImc,
        })
    }

    return(
        <View style={styles.resultImc}>
            <View style={styles.boxSharebutton}>
                {props.resultImc != null ?
                <TouchableOpacity 
                    onPress={onShare}
                    style={styles.shared}
                >
                    <Text style={styles.sharedText}>Compartilhar</Text>
                </TouchableOpacity>
                :
                <View/>
                }
            </View>
            <Text style={styles.information}>{props.messageResultImc}</Text>
            <Text style={styles.numberImc}>{props.resultImc}</Text>
            <Text> </Text>
            <Text>Magro: menos de 18,5</Text>
            <Text>Normal: entre 18,5 e 24,99</Text>
            <Text>Sobrepeso: mais de 25</Text>
        </View>
    );
}