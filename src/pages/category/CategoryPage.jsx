import Categorytype from "../../components/category/CategoryType";
import Line from "../../components/category/Line";
import { Metadata } from "../../lib/Metadata";

export const Categories = () => {
  return (
    <>
      <div>
        <Metadata
          title="Category | TrovKa"
          description="Welcome to Service-TrovKa"
          author="SainaIna"
          keywords="services, trovka, home"
          thumbnail="https://i.ibb.co/s6D2gFC/trovka-icon.png"
        />
      </div>
      <Line/>
      <Categorytype/>
    </>
  );
};
