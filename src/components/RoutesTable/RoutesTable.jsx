import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {Table} from "antd";
import {fetchPositionsPending} from "../../reducers/routeSlice.js";
import data from "../../assets/data/routes.data.json";


const RoutesTable = () => {
    const [selectedRowKey, setSelectedRowKey] = useState(null);
    const dispatch = useDispatch();

    const columns = [
        {
            title: 'Маршрут',
            dataIndex: 'route',
            key: 'route'
        },
        {
            title: 'Точка 1 (lat, lng)',
            dataIndex: 'point_1',
            key: 'point_1',
            render: (text) => text.join(', ')
        },
        {
            title: 'Точка 2 (lat, lng)',
            dataIndex: 'point_2',
            key: 'point_2',
            render: (text) => text.join(', ')
        },
        {
            title: 'Точка 3 (lat, lng)',
            dataIndex: 'point_3',
            key: 'point_3',
            render: (text) => text.join(', ')
        },
    ]

    const handleRowClick = (record) => {
        const arr = [record.point_1, record.point_2, record.point_3]
        setSelectedRowKey(record.key)
        dispatch(fetchPositionsPending(arr));
    };

    const getRowProps = (record) => ({
        onClick: () => handleRowClick(record),
    });

    return (
        <>
            <Table
                dataSource={data}
                columns={columns}
                pagination={{
                    pageSize: 6,
                    showTotal: (total, range) => `Показано ${range[0]}-${range[1]} из ${total} позиций`,
                }}
                rowKey="key"
                onRow={getRowProps}
                rowClassName={(record) =>
                    record.key === selectedRowKey ? 'selected-row' : ''
                }
            />
        </>
    );
};

export default RoutesTable;