import React from "react";
import { useDispatch, useSelector, RootStateOrAny } from "react-redux";
import moment from "moment";
import { getOrders } from "../redux/modules/order";
import { Table, Tooltip, Popover, Menu } from "antd";
import { MenuOutlined, EyeTwoTone, StopTwoTone } from "@ant-design/icons";

const Home = () => {
  const dispatch = useDispatch();
  const orders = useSelector((store: RootStateOrAny) => store.order.data);

  React.useEffect(() => {
    dispatch(getOrders());
  }, [dispatch]);

  const content = (
    <Menu>
      <Menu.Item icon={<EyeTwoTone twoToneColor="#52c41a" />}>
        Ver detalle
      </Menu.Item>
      <Menu.Item icon={<StopTwoTone twoToneColor="#eb2f96" />}>
        Cancelar pedido
      </Menu.Item>
    </Menu>
  );

  const columns = [
    {
      title: "Consecutivo",
      dataIndex: "id",
      key: "consecutive",
      render: (id: string) => <span>{id.padStart(7, "0")}</span>,
      width: 100,
    },
    {
      title: "Fecha de registro",
      dataIndex: "registerDate",
      render: (date: string) => (
        <span>{moment(date).format("DD-MM-YYYY h:mm")}</span>
      ),
      width: 130,
      responsive: ["md" as const],
    },
    {
      title: "Cliente",
      dataIndex: "customer",
      key: "customer",
      ellipsis: {
        showTitle: false,
      },
      render: (customer: { names: string; lastNames: string }) => {
        const customerName = `${customer.names} ${customer.lastNames} `;

        return (
          <Tooltip placement="topLeft" title={customerName}>
            <span>{customerName}</span>
          </Tooltip>
        );
      },
    },
    {
      title: "Ciudad",
      dataIndex: "neighborhood",
      key: "neighborhood",
      render: (neighborhood: { town: { name: string } }) => (
        <span>{`${neighborhood.town.name}`}</span>
      ),
      width: 100,
      responsive: ["sm" as const],
    },
    {
      title: "Barrio",
      dataIndex: "neighborhood",
      key: "neighborhood",
      render: (neighborhood: { name: string }) => (
        <span>{`${neighborhood.name}`}</span>
      ),
      width: 100,
      responsive: ["sm" as const],
    },
    {
      title: "Dirección",
      dataIndex: "address",
      ellipsis: {
        showTitle: false,
      },
      render: (address: string) => (
        <Tooltip placement="topLeft" title={address}>
          <span>{address}</span>
        </Tooltip>
      ),
      responsive: ["sm" as const],
    },
    {
      title: "Fecha prog. de entrega",
      dataIndex: "programmedDeliveryDate",
      render: (date: string) => (
        <span>{moment(date).format("DD-MM-YYYY h:mm")}</span>
      ),
      responsive: ["lg" as const],
    },
    {
      title: "Estado",
      dataIndex: "orderStatus",
      key: "status",
      render: (status: { name: string }) => <span>{`${status.name}`}</span>,
      width: 120,
    },
    {
      title: "Observación",
      dataIndex: "observation",
      ellipsis: {
        showTitle: false,
      },
      render: (observation: string) => (
        <Tooltip placement="topLeft" title={observation}>
          <span>{observation}</span>
        </Tooltip>
      ),
      responsive: ["lg" as const],
    },
    {
      title: "",
      key: "action",
      render: (record: any) => (
        <Popover placement="left" content={content} trigger="click">
          <MenuOutlined />
        </Popover>
      ),
      width: 30,
    },
  ];

  return (
    <Table
      title={() => "Lista de pedidos"}
      columns={columns}
      dataSource={orders}
      rowKey="id"
      size="small"
    />
  );
};

export default Home;
