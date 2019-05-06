import React from 'react';
import { StyleSheet, Text, View, TextInput, Picker } from 'react-native';

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      cm: '0',
      kg: '0',
      grams: '0',
      feet: '0',
      inches: '0',
      pounds: '0'
    };
  }

  getBmi = () => {
    if (this.state.cm !== '0' && this.state.kg !== '0') {
      const kg = Number.parseFloat(this.state.kg);
      const grams = Number.parseFloat(this.state.grams);
      const weight = kg + grams;
      const bmi = (weight / Math.pow((this.state.cm / 100), 2)).toString().substr(0, 5);
      return `BMI: ${bmi}`;
    } else {
      return null;
    }

  }

  convertToFeet = (cm) => {
    const newState = this.state;
    newState.cm = cm;
    const feet = cm * 0.0328084;
    newState.feet = Number.parseInt(feet).toString();
    newState.inches = Number.parseInt((feet - Number.parseInt(feet)) * 12).toString();
    this.setState(newState);
  }

  addInches = (inches) => {
    const newState = this.state;
    newState.inches = inches;
    newState.cm = Number.parseInt((this.state.feet * 30.48) + (inches * 2.54)).toString();
    this.setState(newState);
  }

  addFeet = (feet) => {
    const newState = this.state;
    newState.feet = feet;
    newState.cm = Number.parseInt((feet * 30.48) + (this.state.inches * 2.54)).toString();
    this.setState(newState);
  }

  convertToPounds = (kg) => {
    const newState = this.state;
    newState.kg = kg;
    newState.pounds = Number.parseInt(kg / 0.45359237).toString();
    this.setState(newState);
  }

  convertToGrams = (pounds) => {
    const newState = this.state;
    newState.pounds = pounds;
    const kg = pounds * 0.45359237;
    newState.kg = parseInt(kg).toString();
    newState.grams = (kg - parseInt(kg)).toString();
    this.setState(newState);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center', fontSize: 30 }}>BMI calculator</Text>
        <View style={[styles.flexRow, { borderTopColor: 'grey', borderTopWidth: 0.5 }]}>
          <Text style={{ textAlign: 'center', fontSize: 20 }}>Metric</Text>
        </View>
        {/* cm */}
        <View style={styles.flexRow}>
          <Text style={{ height: 50, width: 150 }}>Height in cm:</Text>
          <Picker
            selectedValue={this.state.cm}
            style={{ height: 50, width: 80, backgroundColor: '#eee' }}
            onValueChange={(itemValue, itemIndex) =>
              this.convertToFeet(itemValue)
            }>
            <Picker.Item label="0" value="0" />
            <Picker.Item label="140" value="140" />
            <Picker.Item label="141" value="141" />
            <Picker.Item label="142" value="142" />
            <Picker.Item label="143" value="143" />
            <Picker.Item label="144" value="144" />
            <Picker.Item label="145" value="145" />
            <Picker.Item label="146" value="146" />
            <Picker.Item label="147" value="147" />
            <Picker.Item label="148" value="148" />
            <Picker.Item label="149" value="149" />
            <Picker.Item label="150" value="150" />
            <Picker.Item label="151" value="151" />
            <Picker.Item label="152" value="152" />
            <Picker.Item label="153" value="153" />
            <Picker.Item label="154" value="154" />
            <Picker.Item label="155" value="155" />
            <Picker.Item label="156" value="156" />
            <Picker.Item label="157" value="157" />
            <Picker.Item label="158" value="158" />
            <Picker.Item label="159" value="159" />
            <Picker.Item label="160" value="160" />
            <Picker.Item label="161" value="161" />
            <Picker.Item label="162" value="162" />
            <Picker.Item label="163" value="163" />
            <Picker.Item label="164" value="164" />
            <Picker.Item label="165" value="165" />
            <Picker.Item label="166" value="166" />
            <Picker.Item label="167" value="167" />
            <Picker.Item label="168" value="168" />
            <Picker.Item label="169" value="169" />
            <Picker.Item label="170" value="170" />
            <Picker.Item label="171" value="171" />
            <Picker.Item label="172" value="172" />
            <Picker.Item label="173" value="173" />
            <Picker.Item label="174" value="174" />
            <Picker.Item label="175" value="175" />
            <Picker.Item label="176" value="176" />
            <Picker.Item label="177" value="177" />
            <Picker.Item label="178" value="178" />
            <Picker.Item label="179" value="179" />
            <Picker.Item label="180" value="180" />
            <Picker.Item label="181" value="181" />
            <Picker.Item label="182" value="182" />
            <Picker.Item label="183" value="183" />
            <Picker.Item label="184" value="184" />
            <Picker.Item label="185" value="185" />
            <Picker.Item label="186" value="186" />
            <Picker.Item label="187" value="187" />
            <Picker.Item label="188" value="188" />
            <Picker.Item label="189" value="189" />
            <Picker.Item label="190" value="190" />
            <Picker.Item label="191" value="191" />
            <Picker.Item label="192" value="192" />
            <Picker.Item label="193" value="193" />
            <Picker.Item label="194" value="194" />
            <Picker.Item label="195" value="195" />
            <Picker.Item label="196" value="196" />
            <Picker.Item label="197" value="197" />
            <Picker.Item label="198" value="198" />
            <Picker.Item label="199" value="199" />
            <Picker.Item label="200" value="200" />
          </Picker>
        </View>
        {/* kg */}
        <View style={styles.flexRow}>
          <Text style={{ height: 50, width: 150 }}>Weight in kg</Text>
          <Picker
            selectedValue={this.state.kg}
            style={{ height: 50, width: 80, backgroundColor: '#eee' }}
            onValueChange={(itemValue, itemIndex) =>
              this.convertToPounds(itemValue)
            }>
            <Picker.Item label="0" value="0" />
            <Picker.Item label="30" value="30" />
            <Picker.Item label="30.5" value="30.5" />
            <Picker.Item label="31" value="31" />
            <Picker.Item label="31.5" value="31.5" />
            <Picker.Item label="32" value="32" />
            <Picker.Item label="32.5" value="32.5" />
            <Picker.Item label="33" value="33" />
            <Picker.Item label="33.5" value="33.5" />
            <Picker.Item label="34" value="34" />
            <Picker.Item label="35" value="35" />
            <Picker.Item label="36" value="36" />
            <Picker.Item label="37" value="37" />
            <Picker.Item label="38" value="38" />
            <Picker.Item label="39" value="39" />
            <Picker.Item label="40" value="40" />
            <Picker.Item label="41" value="41" />
            <Picker.Item label="42" value="42" />
            <Picker.Item label="43" value="43" />
            <Picker.Item label="44" value="44" />
            <Picker.Item label="45" value="45" />
            <Picker.Item label="46" value="46" />
            <Picker.Item label="47" value="47" />
            <Picker.Item label="48" value="48" />
            <Picker.Item label="49" value="49" />
            <Picker.Item label="50" value="50" />
            <Picker.Item label="51" value="51" />
            <Picker.Item label="52" value="52" />
            <Picker.Item label="53" value="53" />
            <Picker.Item label="54" value="54" />
            <Picker.Item label="55" value="55" />
            <Picker.Item label="56" value="56" />
            <Picker.Item label="57" value="57" />
            <Picker.Item label="58" value="58" />
            <Picker.Item label="59" value="59" />
            <Picker.Item label="60" value="60" />
            <Picker.Item label="61" value="61" />
            <Picker.Item label="62" value="62" />
            <Picker.Item label="63" value="63" />
            <Picker.Item label="64" value="64" />
            <Picker.Item label="65" value="65" />
            <Picker.Item label="66" value="66" />
            <Picker.Item label="67" value="67" />
            <Picker.Item label="68" value="68" />
            <Picker.Item label="69" value="69" />
            <Picker.Item label="70" value="70" />
            <Picker.Item label="71" value="71" />
            <Picker.Item label="72" value="72" />
            <Picker.Item label="73" value="73" />
            <Picker.Item label="74" value="74" />
            <Picker.Item label="75" value="75" />
            <Picker.Item label="76" value="76" />
            <Picker.Item label="77" value="77" />
            <Picker.Item label="78" value="78" />
            <Picker.Item label="79" value="79" />
            <Picker.Item label="80" value="80" />
            <Picker.Item label="81" value="81" />
            <Picker.Item label="82" value="82" />
            <Picker.Item label="83" value="83" />
            <Picker.Item label="84" value="84" />
            <Picker.Item label="85" value="85" />
            <Picker.Item label="86" value="86" />
            <Picker.Item label="87" value="87" />
            <Picker.Item label="88" value="88" />
            <Picker.Item label="89" value="89" />
            <Picker.Item label="90" value="90" />
            <Picker.Item label="91" value="91" />
            <Picker.Item label="92" value="92" />
            <Picker.Item label="93" value="93" />
            <Picker.Item label="94" value="94" />
            <Picker.Item label="95" value="95" />
            <Picker.Item label="96" value="96" />
            <Picker.Item label="97" value="97" />
            <Picker.Item label="98" value="98" />
            <Picker.Item label="99" value="99" />
            <Picker.Item label="100" value="100" />
          </Picker>
        </View>

        <View style={[styles.flexRow, { borderTopColor: 'grey', borderTopWidth: 0.5 }]}>
          <Text style={{ textAlign: 'center', fontSize: 20 }}>Imperial</Text>
        </View>
        {/* feet */}
        <View style={styles.flexRow}>
          <Text style={{ height: 50, width: 150 }}>Height in Feet</Text>
          <Picker
            selectedValue={this.state.feet}
            style={{ height: 50, width: 80, backgroundColor: '#eee' }}
            onValueChange={(itemValue, itemIndex) =>
              this.addFeet(itemValue)
            }>
            <Picker.Item label="0" value="0" />
            <Picker.Item label="4" value="4" />
            <Picker.Item label="5" value="5" />
            <Picker.Item label="6" value="6" />
          </Picker>
        </View>

        {/* inches */}
        <View style={styles.flexRow}>
          <Text style={{ height: 50, width: 150 }}>Inches</Text>
          <Picker
            selectedValue={this.state.inches}
            style={{ height: 50, width: 80, backgroundColor: '#eee' }}
            onValueChange={(itemValue, itemIndex) =>
              this.addInches(itemValue)
            }>
            <Picker.Item label="0" value="0" />
            <Picker.Item label="1" value="1" />
            <Picker.Item label="2" value="2" />
            <Picker.Item label="3" value="3" />
            <Picker.Item label="4" value="4" />
            <Picker.Item label="5" value="5" />
            <Picker.Item label="6" value="6" />
            <Picker.Item label="7" value="7" />
            <Picker.Item label="8" value="8" />
            <Picker.Item label="9" value="9" />
            <Picker.Item label="10" value="10" />
            <Picker.Item label="11" value="11" />
            <Picker.Item label="12" value="12" />
            <Picker.Item label="13" value="13" />
            <Picker.Item label="14" value="14" />
            <Picker.Item label="15" value="15" />
            <Picker.Item label="16" value="16" />
            <Picker.Item label="17" value="17" />
            <Picker.Item label="18" value="18" />
            <Picker.Item label="19" value="19" />
            <Picker.Item label="20" value="20" />
            <Picker.Item label="21" value="21" />
            <Picker.Item label="22" value="22" />
            <Picker.Item label="23" value="23" />
            <Picker.Item label="24" value="24" />
            <Picker.Item label="25" value="25" />
            <Picker.Item label="26" value="26" />
            <Picker.Item label="27" value="27" />
            <Picker.Item label="28" value="28" />
            <Picker.Item label="29" value="29" />
            <Picker.Item label="30" value="30" />
          </Picker>
        </View>

        {/* pounds */}
        <View style={styles.flexRow}>
          <Text style={{ height: 50, width: 150 }}>Weight in Pounds</Text>
          <Picker
            selectedValue={this.state.pounds}
            style={{ height: 50, width: 80, backgroundColor: '#eee' }}
            onValueChange={(itemValue, itemIndex) =>
              this.convertToGrams(itemValue)
            }>
            <Picker.Item label="0" value="0" />
            <Picker.Item label="50" value="50" />
            <Picker.Item label="51" value="51" />
            <Picker.Item label="52" value="52" />
            <Picker.Item label="53" value="53" />
            <Picker.Item label="54" value="54" />
            <Picker.Item label="55" value="55" />
            <Picker.Item label="56" value="56" />
            <Picker.Item label="57" value="57" />
            <Picker.Item label="58" value="58" />
            <Picker.Item label="59" value="59" />
            <Picker.Item label="60" value="60" />
            <Picker.Item label="61" value="61" />
            <Picker.Item label="62" value="62" />
            <Picker.Item label="63" value="63" />
            <Picker.Item label="64" value="64" />
            <Picker.Item label="65" value="65" />
            <Picker.Item label="66" value="66" />
            <Picker.Item label="67" value="67" />
            <Picker.Item label="68" value="68" />
            <Picker.Item label="69" value="69" />
            <Picker.Item label="70" value="70" />
            <Picker.Item label="71" value="71" />
            <Picker.Item label="72" value="72" />
            <Picker.Item label="73" value="73" />
            <Picker.Item label="74" value="74" />
            <Picker.Item label="75" value="75" />
            <Picker.Item label="76" value="76" />
            <Picker.Item label="77" value="77" />
            <Picker.Item label="78" value="78" />
            <Picker.Item label="79" value="79" />
            <Picker.Item label="80" value="80" />
            <Picker.Item label="81" value="81" />
            <Picker.Item label="82" value="82" />
            <Picker.Item label="83" value="83" />
            <Picker.Item label="84" value="84" />
            <Picker.Item label="85" value="85" />
            <Picker.Item label="86" value="86" />
            <Picker.Item label="87" value="87" />
            <Picker.Item label="88" value="88" />
            <Picker.Item label="89" value="89" />
            <Picker.Item label="90" value="90" />
            <Picker.Item label="91" value="91" />
            <Picker.Item label="92" value="92" />
            <Picker.Item label="93" value="93" />
            <Picker.Item label="94" value="94" />
            <Picker.Item label="95" value="95" />
            <Picker.Item label="96" value="96" />
            <Picker.Item label="97" value="97" />
            <Picker.Item label="98" value="98" />
            <Picker.Item label="99" value="99" />
            <Picker.Item label="100" value="100" />
            <Picker.Item label="101" value="101" />
            <Picker.Item label="102" value="102" />
            <Picker.Item label="103" value="103" />
            <Picker.Item label="104" value="104" />
            <Picker.Item label="105" value="105" />
            <Picker.Item label="106" value="106" />
            <Picker.Item label="107" value="107" />
            <Picker.Item label="108" value="108" />
            <Picker.Item label="109" value="109" />
            <Picker.Item label="110" value="110" />
            <Picker.Item label="111" value="111" />
            <Picker.Item label="112" value="112" />
            <Picker.Item label="113" value="113" />
            <Picker.Item label="114" value="114" />
            <Picker.Item label="115" value="115" />
            <Picker.Item label="116" value="116" />
            <Picker.Item label="117" value="117" />
            <Picker.Item label="118" value="118" />
            <Picker.Item label="119" value="119" />
            <Picker.Item label="120" value="120" />
            <Picker.Item label="121" value="121" />
            <Picker.Item label="122" value="122" />
            <Picker.Item label="123" value="123" />
            <Picker.Item label="124" value="124" />
            <Picker.Item label="125" value="125" />
            <Picker.Item label="126" value="126" />
            <Picker.Item label="127" value="127" />
            <Picker.Item label="128" value="128" />
            <Picker.Item label="129" value="129" />
            <Picker.Item label="130" value="130" />
            <Picker.Item label="131" value="131" />
            <Picker.Item label="132" value="132" />
            <Picker.Item label="133" value="133" />
            <Picker.Item label="134" value="134" />
            <Picker.Item label="135" value="135" />
            <Picker.Item label="136" value="136" />
            <Picker.Item label="137" value="137" />
            <Picker.Item label="138" value="138" />
            <Picker.Item label="139" value="139" />
            <Picker.Item label="140" value="140" />
            <Picker.Item label="141" value="141" />
            <Picker.Item label="142" value="142" />
            <Picker.Item label="143" value="143" />
            <Picker.Item label="144" value="144" />
            <Picker.Item label="145" value="145" />
            <Picker.Item label="146" value="146" />
            <Picker.Item label="147" value="147" />
            <Picker.Item label="148" value="148" />
            <Picker.Item label="149" value="149" />
            <Picker.Item label="150" value="150" />
            <Picker.Item label="151" value="151" />
            <Picker.Item label="152" value="152" />
            <Picker.Item label="153" value="153" />
            <Picker.Item label="154" value="154" />
            <Picker.Item label="155" value="155" />
            <Picker.Item label="156" value="156" />
            <Picker.Item label="157" value="157" />
            <Picker.Item label="158" value="158" />
            <Picker.Item label="159" value="159" />
            <Picker.Item label="160" value="160" />
            <Picker.Item label="161" value="161" />
            <Picker.Item label="162" value="162" />
            <Picker.Item label="163" value="163" />
            <Picker.Item label="164" value="164" />
            <Picker.Item label="165" value="165" />
            <Picker.Item label="166" value="166" />
            <Picker.Item label="167" value="167" />
            <Picker.Item label="168" value="168" />
            <Picker.Item label="169" value="169" />
            <Picker.Item label="170" value="170" />
            <Picker.Item label="171" value="171" />
            <Picker.Item label="172" value="172" />
            <Picker.Item label="173" value="173" />
            <Picker.Item label="174" value="174" />
            <Picker.Item label="175" value="175" />
            <Picker.Item label="176" value="176" />
            <Picker.Item label="177" value="177" />
            <Picker.Item label="178" value="178" />
            <Picker.Item label="179" value="179" />
            <Picker.Item label="180" value="180" />
            <Picker.Item label="181" value="181" />
            <Picker.Item label="182" value="182" />
            <Picker.Item label="183" value="183" />
            <Picker.Item label="184" value="184" />
            <Picker.Item label="185" value="185" />
            <Picker.Item label="186" value="186" />
            <Picker.Item label="187" value="187" />
            <Picker.Item label="188" value="188" />
            <Picker.Item label="189" value="189" />
            <Picker.Item label="190" value="190" />
            <Picker.Item label="191" value="191" />
            <Picker.Item label="192" value="192" />
            <Picker.Item label="193" value="193" />
            <Picker.Item label="194" value="194" />
            <Picker.Item label="195" value="195" />
            <Picker.Item label="196" value="196" />
            <Picker.Item label="197" value="197" />
            <Picker.Item label="198" value="198" />
            <Picker.Item label="199" value="199" />
            <Picker.Item label="200" value="200" />
            <Picker.Item label="201" value="201" />
            <Picker.Item label="202" value="202" />
            <Picker.Item label="203" value="203" />
            <Picker.Item label="204" value="204" />
            <Picker.Item label="205" value="205" />
            <Picker.Item label="206" value="206" />
            <Picker.Item label="207" value="207" />
            <Picker.Item label="208" value="208" />
            <Picker.Item label="209" value="209" />
            <Picker.Item label="210" value="210" />
            <Picker.Item label="211" value="211" />
            <Picker.Item label="212" value="212" />
            <Picker.Item label="213" value="213" />
            <Picker.Item label="214" value="214" />
            <Picker.Item label="215" value="215" />
            <Picker.Item label="216" value="216" />
            <Picker.Item label="217" value="217" />
            <Picker.Item label="218" value="218" />
            <Picker.Item label="219" value="219" />
            <Picker.Item label="220" value="220" />
            <Picker.Item label="221" value="221" />
            <Picker.Item label="222" value="222" />
            <Picker.Item label="223" value="223" />
            <Picker.Item label="224" value="224" />
            <Picker.Item label="225" value="225" />
            <Picker.Item label="226" value="226" />
            <Picker.Item label="227" value="227" />
            <Picker.Item label="228" value="228" />
            <Picker.Item label="229" value="229" />
            <Picker.Item label="230" value="230" />
            <Picker.Item label="231" value="231" />
            <Picker.Item label="232" value="232" />
            <Picker.Item label="233" value="233" />
            <Picker.Item label="234" value="234" />
            <Picker.Item label="235" value="235" />
            <Picker.Item label="236" value="236" />
            <Picker.Item label="237" value="237" />
            <Picker.Item label="238" value="238" />
            <Picker.Item label="239" value="239" />
            <Picker.Item label="240" value="240" />
            <Picker.Item label="241" value="241" />
            <Picker.Item label="242" value="242" />
            <Picker.Item label="243" value="243" />
            <Picker.Item label="244" value="244" />
            <Picker.Item label="245" value="245" />
            <Picker.Item label="246" value="246" />
            <Picker.Item label="247" value="247" />
            <Picker.Item label="248" value="248" />
            <Picker.Item label="249" value="249" />
            <Picker.Item label="250" value="250" />
            <Picker.Item label="251" value="251" />
            <Picker.Item label="252" value="252" />
            <Picker.Item label="253" value="253" />
            <Picker.Item label="254" value="254" />
            <Picker.Item label="255" value="255" />
            <Picker.Item label="256" value="256" />
            <Picker.Item label="257" value="257" />
            <Picker.Item label="258" value="258" />
            <Picker.Item label="259" value="259" />
            <Picker.Item label="260" value="260" />
            <Picker.Item label="261" value="261" />
            <Picker.Item label="262" value="262" />
            <Picker.Item label="263" value="263" />
            <Picker.Item label="264" value="264" />
            <Picker.Item label="265" value="265" />
            <Picker.Item label="266" value="266" />
            <Picker.Item label="267" value="267" />
            <Picker.Item label="268" value="268" />
            <Picker.Item label="269" value="269" />
            <Picker.Item label="270" value="270" />
            <Picker.Item label="271" value="271" />
            <Picker.Item label="272" value="272" />
            <Picker.Item label="273" value="273" />
            <Picker.Item label="274" value="274" />
            <Picker.Item label="275" value="275" />
            <Picker.Item label="276" value="276" />
            <Picker.Item label="277" value="277" />
            <Picker.Item label="278" value="278" />
            <Picker.Item label="279" value="279" />
            <Picker.Item label="280" value="280" />
            <Picker.Item label="281" value="281" />
            <Picker.Item label="282" value="282" />
            <Picker.Item label="283" value="283" />
            <Picker.Item label="284" value="284" />
            <Picker.Item label="285" value="285" />
            <Picker.Item label="286" value="286" />
            <Picker.Item label="287" value="287" />
            <Picker.Item label="288" value="288" />
            <Picker.Item label="289" value="289" />
            <Picker.Item label="290" value="290" />
            <Picker.Item label="291" value="291" />
            <Picker.Item label="292" value="292" />
            <Picker.Item label="293" value="293" />
            <Picker.Item label="294" value="294" />
            <Picker.Item label="295" value="295" />
            <Picker.Item label="296" value="296" />
            <Picker.Item label="297" value="297" />
            <Picker.Item label="298" value="298" />
            <Picker.Item label="299" value="299" />
            <Picker.Item label="300" value="300" />
          </Picker>
        </View>

        {/* bmi */}
        <View style={[styles.flexRow, { borderTopColor: 'grey', borderTopWidth: 0.5, paddingTop: 20 }]}>
          <Text style={{ fontSize: 40 }}>{this.getBmi()}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'space-around'
  },
  flexRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  }
});
