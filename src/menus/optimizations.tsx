import React from "react";
import { View, Text } from "react-native-web";
import { Styles } from "../common/styles";

export default class Optimizations extends React.PureComponent {
    render(): JSX.Element {
        return (
            <React.Fragment>
                <main>
                    <div id="introduction" className="page-introduction">
                        <span className="page-title"> Optimizations </span>
                        <span className="page-subtitle"> Optimize Windows for performance and security. </span>
                    </div>
                    <View style={Styles[".card"]}>
                        <View style={Styles[".card-desc"]}>
                            <Text style={[ Styles[".card-desc .card-title"] ]}>
                                Test
                            </Text>
                        </View>
                        <View style={Styles[".card-desc .card-subtitle"]}>
                            <Text style={Styles[".card-desc .card-subtitle"]}>
                                &nbsp; Hello
                            </Text>
                        </View>
                    </View>
                </main>
            </React.Fragment>
        );
    }
}
