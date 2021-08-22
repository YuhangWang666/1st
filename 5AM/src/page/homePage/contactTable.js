import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';

const columns = [
    {   field: 'id',
        headerName: 'ID',
        width: 120
    },
    {
        field: 'tag',
        headerName: 'Tag',
        width: 200,
        editable: true,
        type: 'array',
    },
    {
        field: 'name',
        headerName: 'Name',
        width: 200,
        editable: true,
    },
    {
        field: 'currentLocation',
        headerName: 'Current Location',
        width: 200,
        editable: true,
    },
    {
        field: 'commonConnections',
        headerName: 'Common Connections',
        width: 200,
        editable: true,
    },
    {
        field: 'lastCatchUp',
        headerName: 'Last CatchUp',
        width: 200,
        editable: true,
    },
    {
        field: 'university',
        headerName: 'University',
        width: 200,
        editable: true,
    },
    {
        field: 'position',
        headerName: 'Position',
        width: 200,
        editable: true,
    },
    {
        field: 'email',
        headerName: 'E-mail',
        width: 200,
        editable: true,
    },
    {
        field: 'phone',
        headerName: 'Phone',
        width: 200,
        editable: true,
    },
    {
        field: 'address',
        headerName: 'Address',
        width: 200,
        editable: true,
    },
    {
        field: 'note',
        headerName: 'Note',
        width: 200,
        editable: true,
    },
];

const rows = [
    { id: 1, tag:['tag1','tag2'], name: 'Snow', currentLocation: 'China', commonConnections: '123',
        lastCatchUp:'2021/08/20', university:'University of Melbourne', position:'China', email:'123@qq.com',
        phone:'110', address:'GuangDong', note:'good'},
    { id: 2, tag:['tag2','tag3'], name: 'John', currentLocation: 'Australia', commonConnections: '456',
        lastCatchUp:'2021/08/20', university:'University of Melbourne', position:'Australia', email:'456@qq.com',
        phone:'120', address:'CBD', note:'good'},
    { id: 3, tag:['tag3','tag1'], name: 'XiaoMing', currentLocation: 'USA', commonConnections: '789',
        lastCatchUp:'2021/08/20', university:'University of Melbourne', position:'Australia', email:'789@qq.com',
        phone:'000', address:'CBD', note:'good'},
    { id: 4, tag:['tag4','tag5'], name: 'Mr.Zhang', currentLocation: 'UK', commonConnections: '321',
        lastCatchUp:'2021/08/20', university:'University of Melbourne', position:'Australia', email:'321@qq.com',
        phone:'119', address:'CBD', note:'good'},
    { id: 5, tag:['tag5'], name: 'Alice', currentLocation: 'Japan', commonConnections: '543',
        lastCatchUp:'2021/08/20', university:'University of Melbourne', position:'China', email:'543@qq.com',
        phone:'114', address:'GuangDong', note:'good'},
    { id: 6, tag:['tag5','tag4','tag3'], name: 'Jerry', currentLocation: 'Australia', commonConnections: '987',
        lastCatchUp:'2021/08/20', university:'University of Melbourne', position:'Australia', email:'987@qq.com',
        phone:'233', address:'Australia', note:'good'},
];

export default function DataTable() {
    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                checkboxSelection
                disableSelectionOnClick
            />
        </div>
    );
}