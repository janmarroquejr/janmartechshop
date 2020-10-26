import React from "react";
import { Helmet } from "react-helmet";

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keyword" content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: "Welcome to Janmar's TechShop",
  keywords: "electronics, buy electronics, cheap tech",
  description: "We sell the best products for you budget!",
};

export default Meta;
