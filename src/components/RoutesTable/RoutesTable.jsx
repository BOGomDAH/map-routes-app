import React from 'react';
import {Table} from "antd";
import {useDispatch} from "react-redux";
import {setSelectedRoute} from "../../reducers/routeSlice.js";

const RoutesTable = () => {
    const dispatch = useDispatch()
    const dataSource = [
        {
            key: '1',
            route: 'Маршрут №1',
            point_1: [59.84660399, 30.29496392],
            point_2: [59.82934196, 30.42423701],
            point_3: [59.83567701, 30.38064206]
        },
        {
            key: '2',
            route: 'Маршрут №2',
            point_1: [56.82934196, 30.42423701],
            point_2: [56.82761295, 30.41705607],
            point_3: [56.84660399, 30.29496392]
        },
        {
            key: '3',
            route: 'Маршрут №3',
            point_1: [59.83567701, 30.38064206],
            point_2: [59.84660399, 30.29496392],
            point_3: [59.82761295, 30.41705607]
        }
    ]

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
        dispatch(setSelectedRoute([record.point_1, record.point_2, record.point_3]))
    };

    // Функция возвращает объект с пропсами для каждой строки таблицы
    const getRowProps = (record) => ({
        onClick: () => handleRowClick(record),
    });

    return (
        <Table dataSource={dataSource} columns={columns} rowKey="key" onRow={getRowProps}/>
    );
};

export default RoutesTable;