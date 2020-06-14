import React, { PropsWithChildren } from "react";
import { RouteConfigComponentProps, renderRoutes } from "react-router-config";
import logo from "../logo.svg";
import { Layout, PageHeader } from "antd";
import ConfigProvider from "antd/es/config-provider";
import { useSelector, RootStateOrAny } from "react-redux";

const { Footer, Content } = Layout;

const Root = ({ route }: PropsWithChildren<RouteConfigComponentProps<any>>) => {
  const locale = useSelector((store: RootStateOrAny) => store.app.locale);

  return (
    <ConfigProvider locale={locale}>
      <Layout>
        <PageHeader
          ghost={false}
          title="Pedidos"
          subTitle="Insight Store"
          extra={[]}
          avatar={{
            src: logo,
            size: 50,
          }}
        ></PageHeader>
        <Content>
          <div className="site-layout-content">
            {renderRoutes(route?.routes)}
          </div>
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </ConfigProvider>
  );
};

export default Root;
