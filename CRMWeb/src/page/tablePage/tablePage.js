import React from "react";
import {Table, Input, Popconfirm, Button, Layout, Menu} from 'antd'
import {
    SearchOutlined,
    FilterFilled,
    LinkOutlined,
    MoreOutlined,
    EyeFilled,
    DownOutlined,
    FileFilled,
    DownloadOutlined,
    UserOutlined,
    VideoCameraOutlined,
    HeartOutlined,
    AppstoreOutlined,
    LeftOutlined,
    RightOutlined
} from '@ant-design/icons';
import EditableTable from '../../components/EditTable/EditTable'

const {Header, Footer, Sider, Content} = Layout

class TablePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visibleFilter: false,
            collapsed: false
        };
    }

    get FilterComp() {
        return <div>123S</div>
    }

    render() {
        const {FilterComp} = this
        const {visibleFilter, collapsed} = this.state
        return (
            <Layout style={{
                height: '100vh'
            }}>
                <Sider
                    collapsed={collapsed}
                    style={{
                        borderRight: '1px solid #CECECE',
                    }}
                    trigger={null}
                    theme={'light'}
                    collapsedWidth={0}
                    collapsible={true}>
                    <div onClick={() => {
                        this.setState({
                            collapsed: !this.state.collapsed
                        })
                    }} className='leftArrow'>
                        <LeftOutlined/>
                    </div>
                    <Menu mode="inline" defaultSelectedKeys={['4']}>
                        <Menu.Item key="1" icon={<UserOutlined/>}>
                            Contacts
                        </Menu.Item>
                        <Menu.Item key="2" icon={<AppstoreOutlined/>}>
                            Recent
                        </Menu.Item>
                        <Menu.Item key="3" icon={<HeartOutlined/>}>
                            Favorite
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Header
                        style={{
                            color: "white",
                            fontSize: 20,
                            fontWeight: "bolder",
                            backgroundColor: '#4d79ff',
                            textAlign: "start",
                            padding: 0
                        }}>
                        <div style={this.state.collapsed ? {} : {
                            padding: 0,
                            paddingRight: 40,
                            width: 0,
                            opacity: 0
                        }} className='RightOutlined' onClick={() => {
                            this.setState({
                                collapsed: !this.state.collapsed
                            })
                        }}><RightOutlined/></div>
                        Person CRM</Header>
                    <Content>
                        <div>
                            <div style={{
                                height: 80,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                padding: 10
                            }}>
                                <div className="center">
                                    <Input
                                        placeholder={'搜索'}
                                        style={{
                                            margin: 5,
                                            marginRight: 0,
                                            width: 300,
                                            height: 40,
                                            border: '1px solid #999',
                                            borderRadius: '5px 0 0 5px',
                                        }}
                                        prefix={<SearchOutlined/>}/>
                                    <Button
                                        style={{
                                            fontSize: 20,
                                            color: '#777',
                                            margin: 0,
                                            width: 100,
                                            height: 40,
                                            border: '1px solid #999',
                                            borderLeft: 0,
                                            borderRadius: '0 5px 5px 0',
                                        }}>Filter<FilterFilled/></Button>
                                </div>
                                <div className="center">
                                    <Button style={{marginRight: 10}} className='button'>
                                        <EyeFilled/>Columns<DownOutlined/>
                                    </Button>
                                    <Button style={{marginRight: 10}} className='button'>
                                        <FileFilled/>Form<DownOutlined/>
                                    </Button>
                                    <Button style={{backgroundColor: '#0D9549', color: "white"}} className='button'>
                                        <DownloadOutlined style={{color: "white", fontSize: 15}}/>Download All
                                    </Button>
                                </div>
                            </div>
                            <div>
                                <EditableTable/>
                            </div>
                        </div>
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

export default TablePage
