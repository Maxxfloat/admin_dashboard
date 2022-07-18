import { FC, useEffect, useState } from "react";
import {
  SparklineComponent,
  Inject,
  SparklineTooltip,
} from "@syncfusion/ej2-react-charts";
import { DataManager } from "@syncfusion/ej2/data";

type CustomSparkLineProps = {
  id?: string;
  color?: string;
  currentColor?: string;
  data?: object[] | DataManager;
  height?: string;
  width?: string;
  type?: "Line" | "Column" | "WinLoss" | "Pie" | "Area";
};

// class SparkLine extends React.PureComponent<CustomSparkLineProps> {
//   render() {
const SparkLine: FC<CustomSparkLineProps> = (props) => {
  // const { id, height, width, color, data, type, currentColor } = this.props;
  const [sparkComponent, setSparkComponent] = useState(null);
  const { id, height, width, color, data, type, currentColor } = props;

  useEffect(() => {
    setSparkComponent(
      <SparklineComponent
        id={id}
        height={height}
        width={width}
        lineWidth={1}
        valueType="Numeric"
        fill={color}
        border={{ color: currentColor, width: 2 }}
        tooltipSettings={{
          visible: true,
          // eslint-disable-next-line no-template-curly-in-string
          format: "${x} : data ${yval}",
          trackLineSettings: {
            visible: true,
          },
        }}
        markerSettings={{ visible: ["All"], size: 2.5, fill: currentColor }}
        dataSource={data}
        xName="x"
        yName="yval"
        type={type}
      >
        <Inject services={[SparklineTooltip]} />
      </SparklineComponent>
    );
  }, []);

  const SparkName = sparkComponent;
  return (
    <>
      {/* {typeof window !== "undefined" && (
      )} */}
      {sparkComponent}
    </>
  );
};

export default SparkLine;
