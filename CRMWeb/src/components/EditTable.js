import React, {useContext, useState, useEffect, useRef} from 'react';
import {Table, Typography, Input, Button, Popconfirm, Form, Checkbox, Tag} from 'antd';

import {
    StarOutlined,
    TagFilled,
    DownOutlined,
    FontSizeOutlined,
    EditFilled,
    UnorderedListOutlined,
    CalendarOutlined,
    TagsFilled,
    PlusCircleFilled,
    SlidersFilled,
    MailOutlined,
    PhoneFilled,
    LinkedinFilled
} from '@ant-design/icons';
const { Text } = Typography;
const EditableContext = React.createContext(null);
const EditableRow = ({index, ...props}) => {
    const [form] = Form.useForm();
    return (
        <Form form={form} component={false}>
            <EditableContext.Provider value={form}>
                <tr {...props} />
            </EditableContext.Provider>
        </Form>
    );
};

const EditableCell = (
    {
        title,
        editable,
        children,
        dataIndex,
        record,
        handleSave,
        ...restProps
    }
) => {
    const [editing, setEditing] = useState(false);
    const inputRef = useRef(null);
    const form = useContext(EditableContext);
    useEffect(() => {
        if (editing) {
            inputRef.current.focus();
        }
    }, [editing]);

    const toggleEdit = () => {
        setEditing(!editing);
        form.setFieldsValue({
            [dataIndex]: record[dataIndex],
        });
    };

    const save = async () => {
        try {
            const values = await form.validateFields();
            toggleEdit();
            handleSave({...record, ...values});
        } catch (errInfo) {
            console.log('Save failed:', errInfo);
        }
    };

    let childNode = children;

    if (editable) {
        childNode = editing ? (
            <Form.Item
                style={{
                    margin: 0,
                    height: 22
                }}
                name={dataIndex}
            >
                <Input style={{padding: 0, height: 22}} bordered={false} ref={inputRef} onPressEnter={save}
                       onBlur={save}/>
            </Form.Item>
        ) : (
            <div
                className="editable-cell-value-wrap"
                onClick={toggleEdit}>
                {children}
                <span style={{opacity: 0}}>1</span>
            </div>
        );
    }

    return <td {...restProps}>{childNode}</td>;
};

class EditableTable extends React.Component {
    constructor(props) {
        super(props);
        this.columns = [
            {
                title: ({sortOrder, sortColumn, filters}) => {
                    return <div className="spaceBetween">
                        <div>
                            <TagFilled style={{marginRight: 5}}/>
                            Tag
                        </div>
                        <DownOutlined/>
                    </div>
                },
                fixed: 'left',
                dataIndex: 'tag',
                width: '200px',
                render: (text, record, index) => {
                    return <Tag className="tag" color="#2db7f5">{text}</Tag>

                    // console.log()
                    // return (<div>{
                    //     record.map(o=>{
                    //         return <div>{o}</div>
                    //     })
                    // }</div>)
                }
            },
            {
                title: ({sortOrder, sortColumn, filters}) => {
                    return <div className="spaceBetween">
                        <div>
                            <EditFilled style={{marginRight: 5}}/>
                            Name
                        </div>
                        <DownOutlined />
                    </div>
                },
                fixed: 'left',
                dataIndex: 'name',
                width: '200px',
                editable: true,
            },
            {
                title: ({sortOrder, sortColumn, filters}) => {
                    return <div className="spaceBetween">
                        <div>
                            <TagsFilled style={{marginRight: 5}}/>
                            Commond Connections
                        </div>
                        <DownOutlined/>
                    </div>
                },
                dataIndex: 'Connections',
                width: '300px',
                editable: true,
            },
            {
                title: ({sortOrder, sortColumn, filters}) => {
                    return <div className="spaceBetween">
                        <div>
                            <CalendarOutlined style={{marginRight: 5}}/>
                            Last Catchup
                        </div>
                        <DownOutlined/>
                    </div>
                },
                dataIndex: 'lastCatchup',
                width: '200px',
                editable: true,
            },
            {
                title: ({sortOrder, sortColumn, filters}) => {
                    return <div className="spaceBetween">
                        <div>
                            <SlidersFilled style={{marginRight: 5}}/>
                            Current Company
                        </div>
                        <DownOutlined/>
                    </div>
                },
                dataIndex: 'currentCompany',
                width: '200px',
                render: (_, record) =>
                    this.state.dataSource.length >= 1 ? (
                        <Popconfirm title="Sure to delete?" onConfirm={() => this.handleDelete(record.key)}>
                            <a>1</a>
                        </Popconfirm>
                    ) : null,
            },
            {
                title: ({sortOrder, sortColumn, filters}) => {
                    return <div className="spaceBetween">
                        <div>
                            <TagFilled style={{marginRight: 5}}/>
                            Service Area
                        </div>
                        <DownOutlined/>
                    </div>
                },
                width: '200px',
                dataIndex: 'ServiceArea',
                render: (_, record) =>
                    this.state.dataSource.length >= 1 ? (
                        <Popconfirm title="Sure to delete?" onConfirm={() => this.handleDelete(record.key)}>
                            <a>1</a>
                        </Popconfirm>
                    ) : null,
            },
            {
                title: ({sortOrder, sortColumn, filters}) => {
                    return <div className="spaceBetween">
                        <div>
                            <EditFilled style={{marginRight: 5}}/>
                            Position
                        </div>
                        <DownOutlined/>
                    </div>
                },
                width: '200px',
                dataIndex: 'Position'
            },
            {
                title: ({sortOrder, sortColumn, filters}) => {
                    return <div className="spaceBetween">
                        <div>
                            <MailOutlined style={{marginRight: 5}}/>
                            Email
                        </div>
                        <DownOutlined/>
                    </div>
                },
                width: '200px',
                dataIndex: 'Position'
            },
            {
                title: ({sortOrder, sortColumn, filters}) => {
                    return <div className="spaceBetween">
                        <div>
                            <PhoneFilled style={{marginRight: 5}}/>
                            Phone Number
                        </div>
                        <DownOutlined/>
                    </div>
                },
                width: '200px',
                dataIndex: 'Position'
            },
            {
                title: ({sortOrder, sortColumn, filters}) => {
                    return <div className="spaceBetween">
                        <div>
                            <LinkedinFilled style={{marginRight: 5}}/>
                            Linkedin
                        </div>
                        <DownOutlined/>
                    </div>
                },
                width: '200px',
                dataIndex: 'Position'
            },
            {
                title: ({sortOrder, sortColumn, filters}) => {
                    return <div className="spaceBetween">
                        <div>
                            <CalendarOutlined style={{marginRight: 5}}/>
                            Address
                        </div>
                        <DownOutlined/>
                    </div>
                },
                width: '200px',
                dataIndex: 'Position'
            },
            {
                title: ({sortOrder, sortColumn, filters}) => {
                    return <div className="spaceBetween">
                        <div>
                            <CalendarOutlined style={{marginRight: 5}}/>
                            Notes
                        </div>
                        <DownOutlined/>
                    </div>
                },
                width: '200px',
                dataIndex: 'Position'
            },
            {
                title: ({sortOrder, sortColumn, filters}) => {
                    return <div className="spaceBetween">
                        <div>
                            <CalendarOutlined style={{marginRight: 5}}/>
                            Submission IP
                        </div>
                        <DownOutlined/>
                    </div>
                },
                width: '200px',
                dataIndex: 'Position'
            },
            {
                title: ({sortOrder, sortColumn, filters}) => {
                    return <div className="spaceBetween">
                        <div>
                            <CalendarOutlined style={{marginRight: 5}}/>
                            Submission Date
                        </div>
                        <DownOutlined/>
                    </div>
                },
                width: '200px',
                dataIndex: 'Position'
            },
            {
                title: ({sortOrder, sortColumn, filters}) => {
                    return <div className="spaceBetween">
                        <div>
                            <CalendarOutlined style={{marginRight: 5}}/>
                            Last Update Date
                        </div>
                        <DownOutlined/>
                    </div>
                },
                width: '200px',
                dataIndex: 'Position'
            },
            {
                title: ({sortOrder, sortColumn, filters}) => {
                    return <div className="spaceBetween">
                        <div>
                            <CalendarOutlined style={{marginRight: 5}}/>
                            Submission ID
                        </div>
                        <DownOutlined/>
                    </div>
                },
                width: '200px',
                dataIndex: 'Position'
            },
            {
                title: ({sortOrder, sortColumn, filters}) => {
                    return <div className="spaceBetween">
                        <div>
                            <CalendarOutlined style={{marginRight: 5}}/>
                            Current Location
                        </div>
                        <DownOutlined/>
                    </div>
                },
                width: '200px',
                dataIndex: 'Position'
            },
        ];
        this.state = {
            dataSource: [
                {
                    tag: 'Family',
                    key: '0',
                    name: 'Edward King 0',
                    age: '32',
                    address: 'London, Park Lane no. 0',
                },
                {
                    tag: 'Friends',
                    key: '1',
                    name: 'Edward King 1',
                    age: '32',
                    address: 'London, Park Lane no. 1',
                },
            ],
            count: 2,
            focusRow: null,
            focusColumn: null,
        };
    }

    handleDelete = (key) => {
        const dataSource = [...this.state.dataSource];
        this.setState({
            dataSource: dataSource.filter((item) => item.key !== key),
        });
    };
    handleAdd = () => {
        const {count, dataSource} = this.state;
        const newData = {
            key: count,
            name: `Edward King ${count}`,
            age: '32',
            address: `London, Park Lane no. ${count}`,
        };
        this.setState({
            dataSource: [...dataSource, newData],
            count: count + 1,
        });
    };
    handleSave = (row) => {
        const newData = [...this.state.dataSource];
        const index = newData.findIndex((item) => row.key === item.key);
        const item = newData[index];
        newData.splice(index, 1, {...item, ...row});
        this.setState({
            dataSource: newData,
        });
    };
    selectionConfig = {
        columnWidth: '100px',
        renderCell: (checked, record, index, originNode) => {
            return <div>
                <Checkbox style={{marginRight: 10}} checked={checked}></Checkbox>
                <StarOutlined style={{color: "#999", cursor: "pointer"}}/>
            </div>
        },
        selections: [
            {
                key: 'odd',
                text: 'Select path Row',
                onSelect: changableRowKeys => {
                    let newSelectedRowKeys = [];
                    newSelectedRowKeys = changableRowKeys.filter((key, index) => {
                        if (index % 2 !== 0) {
                            return false;
                        }
                        return true;
                    });
                    this.setState({selectedRowKeys: newSelectedRowKeys});
                },
            },
            {
                key: 'even',
                text: 'Select unpath Row',
                onSelect: changableRowKeys => {
                    let newSelectedRowKeys = [];
                    newSelectedRowKeys = changableRowKeys.filter((key, index) => {
                        if (index % 2 !== 0) {
                            return true;
                        }
                        return false;
                    });
                    this.setState({selectedRowKeys: newSelectedRowKeys});
                },
            },
        ],
        fixed: 'left',
    }

    render() {
        const {selectionConfig} = this;
        const {dataSource} = this.state;
        const components = {
            body: {
                row: EditableRow,
                cell: EditableCell,
            },
        };
        const columns = this.columns.map((col) => {
            if (!col.editable) {
                return col;
            }

            return {
                ...col,
                onCell: (record) => ({
                    record,
                    editable: col.editable,
                    dataIndex: col.dataIndex,
                    title: col.title,
                    handleSave: this.handleSave,
                }),
            };
        });
        const columns2 = [
            {
                title: 'Full Name',
                width: 100,
                dataIndex: 'name',
                key: 'name',
                fixed: 'left',
            },
            {
                title: 'Age',
                width: 100,
                dataIndex: 'age',
                key: 'age',
                fixed: 'left',
            },
            {
                title: 'Column 1',
                dataIndex: 'address',
                key: '1',
                width: 150,
            },
            {
                title: 'Column 2',
                dataIndex: 'address',
                key: '2',
                width: 150,
            },
            {
                title: 'Column 3',
                dataIndex: 'address',
                key: '3',
                width: 150,
            },
            {
                title: 'Column 4',
                dataIndex: 'address',
                key: '4',
                width: 150,
            },
            {
                title: 'Column 5',
                dataIndex: 'address',
                key: '5',
                width: 150,
            },
            {
                title: 'Column 6',
                dataIndex: 'address',
                key: '6',
                width: 150,
            },
            {
                title: 'Column 7',
                dataIndex: 'address',
                key: '7',
                width: 150,
            },
            { title: 'Column 8', dataIndex: 'address', key: '8' },
            {
                title: 'Action',
                key: 'operation',
                fixed: 'right',
                width: 100,
                render: () => <a>action</a>,
            },
        ];

        const data = [];
        for (let i = 0; i < 100; i++) {
            data.push({
                key: i,
                name: `Edrward ${i}`,
                age: 32,
                address: `London Park no. ${i}`,
            });
        }
        return (
            <div className="tableContainer">
                <Table
                    scroll={{ x: 1500 }}
                    rowSelection={selectionConfig}
                    pagination={false}
                    components={components}
                    rowClassName={() => 'editable-row'}
                    bordered
                    dataSource={dataSource}
                    columns={columns}
                    summary={(data)=>{
                        return <Table.Summary fixed>
                            <Table.Summary.Row>
                                <Table.Summary.Cell index={0}>
                                    <div class="addRow" onClick={this.handleAdd}>
                                        <PlusCircleFilled />ADD</div>
                                </Table.Summary.Cell>
                                <Table.Summary.Cell index={1}></Table.Summary.Cell>
                                <Table.Summary.Cell index={2}></Table.Summary.Cell>
                            </Table.Summary.Row>
                        </Table.Summary>
                    }}
                />
            </div>

        );
    }
}

export default EditableTable
