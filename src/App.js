import React, { Component } from "react";
import CommonHeader from "./components/header/header";
import CommonFooter from "./components/footer/footer";
import { Button, Layout, Icon, Input, Tabs, List, Avatar, Badge } from "antd";
import "./App.css";

const { Header, Footer, Content, Sider } = Layout;
const Search = Input.Search;
const TabPane = Tabs.TabPane;
const Item = List.Item;

class App extends Component {
  render() {
    function callback(key) {
      console.log(key);
    }

    const data = [
      {
        title: "Ant Design Title 1"
      },
      {
        title: "Ant Design Title 2"
      },
      {
        title: "Ant Design Title 3"
      },
      {
        title: "Ant Design Title 4"
      }
    ];

    return (
      <div className="App">
        <Layout>
          <Header className="height60">
            <CommonHeader />
          </Header>
          <Content className="marginAuto">
            <Layout>
              <div className="height140">
                <img src="pp.page2.png" alt="top" />
              </div>
              <Layout>
                <Sider className="width300">
                  <div className="btnSearchWrap">
                    <Button
                      size="small"
                      type="primary"
                      style={{ marginRight: "8px" }}
                    >
                      <Icon type="plus" />
                      创建小组
                    </Button>
                    <Button size="small" type="danger">
                      <Icon type="search" />
                      查找小组/用户
                    </Button>
                    <Search
                      className="width230"
                      placeholder="请输入"
                      onSearch={value => console.log(value)}
                      enterButton
                    />
                  </div>
                  <Tabs className="textAlign" defaultActiveKey="1" onChange={callback}>
                    <TabPane
                      title="聊天"
                      tab={
                        <span>
                          <Icon type="message" />
                        </span>
                      }
                      key="1"
                    >
                      <List
                        itemLayout="horizontal"
                        dataSource={data}
                        renderItem={item => (
                          <Item arrow="horizontal">
                            <List.Item.Meta
                              avatar={
                                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                              }
                              title={
                                <a href="https://ant.design">{item.title}</a>
                              }
                              description={"描述描述111111111111111111111111"}
                            />
                            <Badge style={{ marginTop: "-4px" }} count={1} />
                            <Icon type="right" />
                          </Item>
                        )}
                      />
                    </TabPane>
                    <TabPane
                      title="我加入的学习小组"
                      tab={
                        <span>
                          <Icon type="user-add" />
                        </span>
                      }
                      key="2"
                    >
                      <List
                        itemLayout="horizontal"
                        dataSource={data}
                        renderItem={item => (
                          <Item arrow="horizontal">
                            <List.Item.Meta
                              avatar={
                                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                              }
                              title={
                                <a href="https://ant.design">{item.title}</a>
                              }
                              description={"2人"}
                            />
                          </Item>
                        )}
                      />
                    </TabPane>
                    <TabPane
                      tab={
                        <span>
                          <Icon type="usergroup-add" />
                        </span>
                      }
                      key="3"
                    >
                      <List
                        itemLayout="horizontal"
                        dataSource={data}
                        renderItem={item => (
                          <Item arrow="horizontal">
                            <List.Item.Meta
                              avatar={
                                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                              }
                              title={
                                <a href="https://ant.design">{item.title}</a>
                              }
                            />
                          </Item>
                        )}
                      />
                    </TabPane>
                  </Tabs>
                </Sider>
                <Content>
                  <img src="init.jpg" alt="initPic" />
                </Content>
              </Layout>
            </Layout>
          </Content>
          <Footer className="common_footer">
            <CommonFooter />
          </Footer>
        </Layout>
      </div>
    );
  }
}

export default App;
