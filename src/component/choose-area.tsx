import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    ScrollView,
    View,
    Image,
    TouchableNativeFeedback,
    TouchableWithoutFeedback
} from 'react-native';
import { px } from  '../config/common';
import { ChooseAreaProps } from './interface';

export default class extends Component<ChooseAreaProps> {
    jumpPage() {
        const { navigate } = this.props.navigation;

        navigate('Detail_1', { name: 'Jane' });
    }
    render() {
        return (
            <View style={styles.container}>
                <ScrollView>

                    <View style={styles.ul}>
                        <TouchableWithoutFeedback onPress={this.jumpPage.bind(this)}>
                            <View style={[styles.li]}>
                                <Text style={styles.font_hospital}>
                                武汉市中心医院（后湖院区）
                                </Text>
                                <Text style={styles.font_position}>
                                武汉市江汉区姑嫂树路16号
                                </Text>
                                <Image style={styles.li_img} source={require('../img/icon_1.png')} resizeMode='contain'></Image>
                            </View>
                        </TouchableWithoutFeedback>

                        <TouchableNativeFeedback onPress={this.jumpPage.bind(this)}>
                            <View style={[styles.li, { borderColor: 'transparent' }]}>
                                <Text style={styles.font_hospital}>
                                武汉市中心医院（谌家矶院区）
                                </Text>
                                <Text style={styles.font_position}>
                                湖北省武汉市江岸区
                                </Text>
                                <Image style={styles.li_img} source={require('../img/icon_1.png')} resizeMode='contain'></Image>
                            </View>
                        </TouchableNativeFeedback>
                    </View>

                    <View style={[styles.wrap_2]}>
                        <Text style={styles.font_tip}>
                        购买须知
                        </Text>
                        <Text style={styles.font_tip_content}>
                        1、支付后请直接；
                        </Text>
                        <Text style={styles.font_tip_content}>
                        2、挂号后，请在3分钟内进行支付，否则订单失效；
                        </Text>
                        <Text style={styles.font_tip_content}>
                        3、线上挂号，不支持退款。
                        </Text>
                    </View>

                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundColor: '#f0f0f5'
    },
    ul: {
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#e6e6e6',
        backgroundColor: '#ffffff',
        marginTop: px(10),
        width: px(750)
    },
    li: {
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        marginLeft: px(30),
        borderBottomWidth: 1,
        borderColor: '#e6e6e6',
        height: px(160),
        position: 'relative',
        width: px(750 - 30)
    },
    li_img: {
        height: px(28),
        width: px(15),
        position: 'absolute',
        right: px(30),
        top: px((160 - 28) / 2)
    },
    font_hospital: {
        marginTop: px(26),
        color: '#333',
        fontSize: px(34)
    },
    font_position: {
        lineHeight: px(44),
        color: '#838899',
        fontSize: px(28)
    },
    wrap_2: {
        padding: px(50),
        paddingTop: px(20)
    },
    font_tip: {
        color: '#1c8ffe',
        fontSize: px(30),
        marginBottom: px(18)
    },
    font_tip_content: {
        color: '#838899',
        fontSize: px(26)
    }
});
