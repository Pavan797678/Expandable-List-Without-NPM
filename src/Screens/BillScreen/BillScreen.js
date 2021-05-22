import React, {Component} from 'react';
import {StyleSheet, View, ScrollView, Text} from 'react-native';
import {Table, TableWrapper, Row, Col} from 'react-native-table-component';
import {connect} from 'react-redux';
import colors from '../../styles/colors';
import commonStyles from '../../styles/commonStyles';
import fontFamily from '../../styles/fontFamily';
import {moderateVerticalScale} from '../../styles/responsiveSize';

class BillScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['ITEM NAME', 'QTY', 'RATE', 'AMOUNT'],
      widthArr: [200, 35, 60, 95],
      tableFooter: ['TOTAL'],
    };
  }
  render() {
    const state = this.state;

    return (
      <View style={styles.container}>
        <ScrollView horizontal={true}>
          <View>
            <Table borderStyle={{borderWidth: 1, borderColor: colors.black}}>
              <TableWrapper>
                {this.props.billItemsCollection.map((rowData, index) => (
                  <Col
                    data={[
                      'Bill\nSharma Store\nBassi Jaipur Rajasthan-303301\nMobile No-7976785714',
                    ]}
                    style={styles.mainHeader}
                    heightArr={[120]}
                    width={'100%'}
                    textStyle={styles.mainHeaderTitle}
                  />
                ))}
              </TableWrapper>
              <TableWrapper style={styles.wrapper}>
                  <Col
                    data={["Customer Name"]}
                    // style={styles.title}
                    heightArr={[140]}
                    width={200}
                    textStyle={styles.footerText}
                  />
                  <Col
                    data={[this.props.totalBillBalance]}
                    // style={styles.title}
                    heightArr={[140]}
                    width={190}
                    textStyle={styles.footerText}
                  />
                </TableWrapper>
            </Table>

            <Table borderStyle={{borderWidth: 1, borderColor: colors.black}}>
              <Row
                data={state.tableHead}
                widthArr={state.widthArr}
                style={styles.header}
                textStyle={styles.text}
              />
            </Table>
            <ScrollView style={styles.dataWrapper}>
              <Table borderStyle={{borderWidth: 1, borderColor: colors.black}}>
                <TableWrapper style={styles.wrapper}>
                  <TableWrapper>
                    {this.props.billItemsCollection.map((rowData, index) => (
                      <Col
                        data={[rowData.itemName]}
                        style={styles.title}
                        heightArr={[40, 40, 40, 40]}
                        width={200}
                        textStyle={styles.text}
                      />
                    ))}
                  </TableWrapper>

                  <TableWrapper>
                    {this.props.billItemsCollection.map((rowData, index) => (
                      <Col
                        data={[rowData.itemQuantity]}
                        style={styles.title}
                        heightArr={[40, 40, 40, 40]}
                        width={35}
                        textStyle={styles.text}
                      />
                    ))}
                  </TableWrapper>
                  <TableWrapper>
                    {this.props.billItemsCollection.map((rowData, index) => (
                      <Col
                        data={[rowData.itemPrice]}
                        style={styles.title}
                        heightArr={[40, 40, 40, 40]}
                        width={60}
                        textStyle={styles.text}
                      />
                    ))}
                  </TableWrapper>
                  <TableWrapper>
                    {this.props.billItemsCollection.map((rowData, index) => (
                      <Col
                        data={[rowData.itemPrice]}
                        style={styles.title}
                        heightArr={[40, 40, 40, 40]}
                        width={95}
                        textStyle={styles.text}
                      />
                    ))}
                  </TableWrapper>
                </TableWrapper>
                <TableWrapper style={styles.wrapper}>
                  <Col
                    data={state.tableFooter}
                    style={styles.title}
                    heightArr={[40]}
                    width={200}
                    textStyle={styles.footerText}
                  />
                  <Col
                    data={[this.props.totalBillBalance]}
                    style={styles.title}
                    heightArr={[40]}
                    width={190}
                    textStyle={styles.footerText}
                  />
                </TableWrapper>
              </Table>
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 2,
    paddingTop: 30,
    backgroundColor: colors.white,
  },
  mainHeader: {backgroundColor: colors.black},
  mainHeaderTitle: {
    ...commonStyles.futuraBtHeavyFont16,
    color: colors.white,
    textAlign: 'center',
  },
  header: {height: moderateVerticalScale(30)},
  wrapper: {flexDirection: 'row'},
  row: {height: moderateVerticalScale(28)},
  text: {textAlign: 'center'},
  footerText: {
    fontFamily: fontFamily.bold,
    textAlign: 'center',
  },
});

const mapStateToProps = state => {
  return {
    billItemsCollection: state.bill.billtodo,
    totalBillBalance: state.bill.totalBillPrice,
  };
};

export default connect(mapStateToProps)(BillScreen);
