import p1_img from "./sweetcorn_seeds.jpg";
import p2_img from "./tomato_seeds.jpg";
import p3_img from "./cucumber_seeds.jpg";
import p4_img from "./spinach_seeds.jpg";
import p5_img from "./onion_seeds.jpg";
import p6_img from "./pumpkin_seeds.jpg";
import p7_img from "./greenbean_seeds.jpg";
import p8_img from "./carrot_seeds.jpg";
import p9_img from "./bellpepper_seeds.jpg";
import p10_img from "./basil_seeds.jpg";
import p11_img from "./parsley_seeds.jpg";
import p12_img from "./sunflower_seeds.jpg";
import p13_img from "./urea.jpg";
import p14_img from "./ammonium_nitrate.jpeg";
import p15_img from "./ammonium_sulfate.jpeg";
import p16_img from "./superphospate.png";
import p17_img from "./triplesuperphospate.jpeg";
import p18_img from "./monoammoniumphosphate.jpeg";
import p19_img from "./diammoniumphosphate.jpeg";
import p20_img from "./potassiumchloride.png";
import p21_img from "./potassiumsulfate.jpeg";
import p22_img from "./calciumnitrate.jpg";
import p23_img from "./dolomite.jpg";
import p24_img from "./gypsum.jpg";
import p25_img from "./drip.jpeg";
import p26_img from "./s2.jpeg";
import p27_img from "./s3.jpeg";
import p28_img from "./s4.jpeg";
import p29_img from "./s5.jpg";
import p30_img from "./s6.jpeg";
import p31_img from "./s7.jpeg";
import p32_img from "./s8.jpg";
import p33_img from "./s9.jpeg";
import p34_img from "./s10.jpeg";
import p35_img from "./s11.jpeg";
import p36_img from "./s12.jpeg";

let all_product = [
  {
    id: 1,
    name: "Sweetcorn Seeds",
    category: "seeds",
    image: p1_img,
    new_price: 50.0,
    old_price: 80.5,
  },
  {
    id: 2,
    name: "Tomato Seeds",
    category: "seeds",
    image: p2_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 3,
    name: "Cucumber Seeds",
    category: "seeds",
    image: p3_img,
    new_price: 60.0,
    old_price: 100.5,
  },
  {
    id: 4,
    name: "Spinach Seeds",
    category: "seeds",
    image: p4_img,
    new_price: 45.0,
    old_price: 75.0,
  },
  {
    id: 5,
    name: "Onion Seeds",
    category: "seeds",
    image: p5_img,
    new_price: 70.0,
    old_price: 95.5,
  },
  {
    id: 6,
    name: "Pumpkin Seeds",
    category: "seeds",
    image: p6_img,
    new_price: 55.0,
    old_price: 90.0,
  },
  {
    id: 7,
    name: "Green Bean Seeds",
    category: "seeds",
    image: p7_img,
    new_price: 65.0,
    old_price: 110.5,
  },
  {
    id: 8,
    name: "Carrot Seeds",
    category: "seeds",
    image: p8_img,
    new_price: 75.0,
    old_price: 130.5,
  },
  {
    id: 9,
    name: "Bell Pepper Seeds",
    category: "seeds",
    image: p9_img,
    new_price: 90.0,
    old_price: 150.0,
  },
  {
    id: 10,
    name: "Basil Seeds",
    category: "seeds",
    image: p10_img,
    new_price: 40.0,
    old_price: 70.5,
  },
  {
    id: 11,
    name: "Parsley Seeds",
    category: "seeds",
    image: p11_img,
    new_price: 60.0,
    old_price: 95.5,
  },
  {
    id: 12,
    name: "Sunflower Seeds",
    category: "seeds",
    image: p12_img,
    new_price: 80.0,
    old_price: 140.0,
  },
  {
    id: 13,
    name: "Urea",
    category: "fertilizers",
    image: p13_img,
    new_price: 50.0,
    old_price: 70.0,
  },
  {
    id: 14,
    name: "Ammonium Nitrate",
    category: "fertilizers",
    image: p14_img,
    new_price: 60.0,
    old_price: 85.0,
  },
  {
    id: 15,
    name: "Ammonium Sulfate",
    category: "fertilizers",
    image: p15_img,
    new_price: 40.0,
    old_price: 60.0,
  },
  {
    id: 16,
    name: "Superphosphate",
    category: "fertilizers",
    image: p16_img,
    new_price: 55.0,
    old_price: 75.0,
  },
  {
    id: 17,
    name: "Triple Superphosphate",
    category: "fertilizers",
    image: p17_img,
    new_price: 65.0,
    old_price: 90.0,
  },
  {
    id: 18,
    name: "Monoammonium Phosphate (MAP)",
    category: "fertilizers",
    image: p18_img,
    new_price: 70.0,
    old_price: 95.0,
  },
  {
    id: 19,
    name: "Diammonium Phosphate (DAP)",
    category: "fertilizers",
    image: p19_img,
    new_price: 75.0,
    old_price: 100.0,
  },
  {
    id: 20,
    name: "Potassium Chloride (Muriate of Potash)",
    category: "fertilizers",
    image: p20_img,
    new_price: 80.0,
    old_price: 110.0,
  },
  {
    id: 21,
    name: "Potassium Sulfate (Sulfate of Potash)",
    category: "fertilizers",
    image: p21_img,
    new_price: 85.0,
    old_price: 115.0,
  },
  {
    id: 22,
    name: "Calcium Nitrate",
    category: "fertilizers",
    image: p22_img,
    new_price: 50.0,
    old_price: 70.0,
  },
  {
    id: 23,
    name: "Dolomite",
    category: "fertilizers",
    image: p23_img,
    new_price: 45.0,
    old_price: 65.0,
  },
  {
    id: 24,
    name: "Gypsum",
    category: "fertilizers",
    image: p24_img,
    new_price: 55.0,
    old_price: 75.0,
  }
,
{
  id: 25,
  name: "drip",
  category: "irrigation",
  image: p25_img,
  new_price: 49.99,
  old_price: 70.0,
},
{
  id: 26,
  name: "sprinkler heads",
  category: "irrigation",
  image: p26_img,
  new_price: 15.0,
  old_price: 25.0,
},
{
  id: 27,
  name: "soaker hose",
  category: "irrigation",
  image: p27_img,
  new_price: 20.0,
  old_price: 35.0,
},
{
  id: 28,
  name: "irrigation timer",
  category: "irrigation",
  image: p28_img,
  new_price: 30.0,
  old_price: 45.0,
},
{
  id: 29,
  name: "micro sprinklers",
  category: "irrigation",
  image: p29_img,
  new_price: 10.0,
  old_price: 18.0,
},
{
  id: 30,
  name: "water pump",
  category: "irrigation",
  image: p30_img,
  new_price: 150.0,
  old_price: 200.0,
},
{
  id: 31,
  name: "pvc pipes",
  category: "irrigation",
  image: p31_img,
  new_price: 5.0,
  old_price: 10.0,
},
{
  id: 32,
  name: "rain barrels",
  category: "irrigation",
  image: p32_img,
  new_price: 60.0,
  old_price: 85.0,
},
{
  id: 33,
  name: "drip emitters",
  category: "irrigation",
  image: p33_img,
  new_price: 5.0,
  old_price: 12.0,
},
{
  id: 34,
  name: "garden hose",
  category: "irrigation",
  image: p34_img,
  new_price: 25.0,
  old_price: 40.0,
},
{
  id: 35,
  name: "fertilizer injector",
  category: "irrigation",
  image: p35_img,
  new_price: 45.0,
  old_price: 70.0,
},
{
  id: 36,
  name: "drip irrigation kit",
  category: "irrigation",
  image: p36_img,
  new_price: 100.0,
  old_price: 150.0,
}
,
];

export default all_product;
