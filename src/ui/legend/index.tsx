import { IInfoTokens } from "@/utils/convertPricesToXY";
import { getTokenColor } from "../token-price-chart";

interface IProps {
  info: IInfoTokens;
}
export default ({ info }: IProps) => {
  return (
    <div className="flex justify-around mt-10">
      {Object.keys(info).map((key) => (
        <ul key={key}>
          <li>
            token: <span style={{ color: getTokenColor(key) }}>{key}</span>
          </li>
          <li>min: {info[key].minValue}</li>
          <li>max: {info[key].maxValue}</li>
          <li>avg: {info[key].average}</li>
        </ul>
      ))}
    </div>
  );
};
