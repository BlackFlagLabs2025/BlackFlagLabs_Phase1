// src/data/services.js

export default function servicesData(tServices) {
  const items = tServices?.items ?? {};

  return {
    web: [
      { id: "d1", category: "web", name: items.d1?.name,  desc: items.d1?.desc,  priceStart: 450, priceLater: 700 },
      { id: "d2", category: "web", name: items.d2?.name,  desc: items.d2?.desc,  priceStart: 250, priceLater: 400 },
      { id: "d3", category: "web", name: items.d3?.name,  desc: items.d3?.desc,  priceStart: 250, priceLater: 400 },
      { id: "d4", category: "web", name: items.d4?.name,  desc: items.d4?.desc,  priceStart: 300, priceLater: 500 },
      { id: "d5", category: "web", name: items.d5?.name,  desc: items.d5?.desc,  priceStart: 200, priceLater: 300 },
      { id: "d6", category: "web", name: items.d6?.name,  desc: items.d6?.desc,  priceStart: 200, priceLater: 350 },
      { id: "d7", category: "web", name: items.d7?.name,  desc: items.d7?.desc,  priceStart: 200, priceLater: 350 },
      { id: "d8", category: "web", name: items.d8?.name,  desc: items.d8?.desc,  priceStart: 100, priceLater: 200 },
      { id: "d9", category: "web", name: items.d9?.name,  desc: items.d9?.desc,  priceStart: 250, priceLater: 400 },
      { id: "d10", category: "automation", name: items.d10?.name, desc: items.d10?.desc, priceStart: 250, priceLater: 400 },
    ],

    design: [
      { id: "des1",  category: "design",   name: items.des1?.name,  desc: items.des1?.desc,  priceStart: 350, priceLater: 500 },
      { id: "des2",  category: "design",   name: items.des2?.name,  desc: items.des2?.desc,  priceStart: 400, priceLater: 600 },
      { id: "des3",  category: "branding", name: items.des3?.name,  desc: items.des3?.desc,  priceStart: 250, priceLater: 350 },
      { id: "des4",  category: "design",   name: items.des4?.name,  desc: items.des4?.desc,  priceStart: 150, priceLater: 250 },
      { id: "des5",  category: "design",   name: items.des5?.name,  desc: items.des5?.desc,  priceStart: 300, priceLater: 450 },
      { id: "des6",  category: "design",   name: items.des6?.name,  desc: items.des6?.desc,  priceStart: 150, priceLater: 250 },
      { id: "des7",  category: "design",   name: items.des7?.name,  desc: items.des7?.desc,  priceStart: 200, priceLater: 300 },
      { id: "des8",  category: "design",   name: items.des8?.name,  desc: items.des8?.desc,  priceStart: 200, priceLater: 300 },
      { id: "des9",  category: "design",   name: items.des9?.name,  desc: items.des9?.desc,  priceStart: 150, priceLater: 250 },
      { id: "des10", category: "branding", name: items.des10?.name, desc: items.des10?.desc, priceStart: 450, priceLater: 700 },
    ],

    ai: [
      { id: "ai1",  category: "ai", name: items.ai1?.name,  desc: items.ai1?.desc,  priceStart: 400, priceLater: 700 },
      { id: "ai2",  category: "ai", name: items.ai2?.name,  desc: items.ai2?.desc,  priceStart: 300, priceLater: 450 },
      { id: "ai3",  category: "ai", name: items.ai3?.name,  desc: items.ai3?.desc,  priceStart: 600, priceLater: 1000 },
      { id: "ai4",  category: "ai", name: items.ai4?.name,  desc: items.ai4?.desc,  priceStart: 500, priceLater: 800 },
      { id: "ai5",  category: "ai", name: items.ai5?.name,  desc: items.ai5?.desc,  priceStart: 250, priceLater: 400 },
      { id: "ai6",  category: "ai", name: items.ai6?.name,  desc: items.ai6?.desc,  priceStart: 200, priceLater: 350 },
      { id: "ai7",  category: "ai", name: items.ai7?.name,  desc: items.ai7?.desc,  priceStart: 250, priceLater: 400 },
      { id: "ai8",  category: "ai", name: items.ai8?.name,  desc: items.ai8?.desc,  priceStart: 350, priceLater: 600 },
      { id: "ai9",  category: "ai", name: items.ai9?.name,  desc: items.ai9?.desc,  priceStart: 500, priceLater: 900 },
      { id: "ai10", category: "ai", name: items.ai10?.name, desc: items.ai10?.desc, priceStart: 800, priceLater: 1500 },
    ],

    marketing: [
      { id: "m1",  category: "marketing",  name: items.m1?.name,  desc: items.m1?.desc,  priceStart: 200, priceLater: 300 },
      { id: "m2",  category: "marketing",  name: items.m2?.name,  desc: items.m2?.desc,  priceStart: 100, priceLater: 150 },
      { id: "m3",  category: "marketing",  name: items.m3?.name,  desc: items.m3?.desc,  priceStart: 150, priceLater: 200 },
      { id: "m4",  category: "automation", name: items.m4?.name,  desc: items.m4?.desc,  priceStart: 150, priceLater: 250 },
      { id: "m5",  category: "marketing",  name: items.m5?.name,  desc: items.m5?.desc,  priceStart: 200, priceLater: 300 },
      { id: "m6",  category: "marketing",  name: items.m6?.name,  desc: items.m6?.desc,  priceStart: 250, priceLater: 350 },
      { id: "m7",  category: "marketing",  name: items.m7?.name,  desc: items.m7?.desc,  priceStart: 100, priceLater: 150 },
      { id: "m8",  category: "marketing",  name: items.m8?.name,  desc: items.m8?.desc,  priceStart: 200, priceLater: 300 },
      { id: "m9",  category: "marketing",  name: items.m9?.name,  desc: items.m9?.desc,  priceStart: 150, priceLater: 200 },
      { id: "m10", category: "marketing",  name: items.m10?.name, desc: items.m10?.desc, priceStart: 200, priceLater: 300 },
    ],

    support: [
      { id: "s1",  category: "support", name: items.s1?.name,  desc: items.s1?.desc,  priceStart: 200, priceLater: 300 },
      { id: "s2",  category: "support", name: items.s2?.name,  desc: items.s2?.desc,  priceStart: 200, priceLater: 300 },
      { id: "s3",  category: "support", name: items.s3?.name,  desc: items.s3?.desc,  priceStart: 300, priceLater: 450 },
      { id: "s4",  category: "support", name: items.s4?.name,  desc: items.s4?.desc,  priceStart: 250, priceLater: 400 },
      { id: "s5",  category: "support", name: items.s5?.name,  desc: items.s5?.desc,  priceStart: 150, priceLater: 200 },
      { id: "s6",  category: "support", name: items.s6?.name,  desc: items.s6?.desc,  priceStart: 250, priceLater: 400 },
      { id: "s7",  category: "support", name: items.s7?.name,  desc: items.s7?.desc,  priceStart: 70,  priceLater: 100, isMonthly: true },
      { id: "s8",  category: "support", name: items.s8?.name,  desc: items.s8?.desc,  priceStart: 150, priceLater: 250 },
      { id: "s9",  category: "support", name: items.s9?.name,  desc: items.s9?.desc,  priceStart: 100, priceLater: 150 },
      { id: "s10", category: "support", name: items.s10?.name, desc: items.s10?.desc, priceStart: 80,  priceLater: 100 },
    ],
  };
}