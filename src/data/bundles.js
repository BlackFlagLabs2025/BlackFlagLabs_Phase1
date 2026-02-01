// src/data/bundles.js

export default function getBundles(t) {
  return [
    {
      id: "starter",
      name: t.bundles.items.starter.name,
      desc: t.bundles.items.starter.desc,
      target: t.bundles.items.starter.target,
      features: t.bundles.items.starter.features,
      priceStart: 899,
      priceLater: 1099,
      featured: false,
      timeline: "2-3 weeks"
    },

    {
      id: "pro",
      name: t.bundles.items.pro.name,
      desc: t.bundles.items.pro.desc,
      target: t.bundles.items.pro.target,
      features: t.bundles.items.pro.features,
      priceStart: 1599,
      priceLater: 1899,
      featured: true,
      timeline: "4-6 weeks"
    },

    {
      id: "growth",
      name: t.bundles.items.growth.name,
      desc: t.bundles.items.growth.desc,
      target: t.bundles.items.growth.target,
      features: t.bundles.items.growth.features,
      priceStart: 2199,
      priceLater: 2499,
      featured: false,
      timeline: "6-8 weeks"
    },

    {
      id: "enterprise",
      name: t.bundles.items.enterprise.name,
      desc: t.bundles.items.enterprise.desc,
      target: t.bundles.items.enterprise.target,
      features: t.bundles.items.enterprise.features,
      priceStart: 2999,
      priceLater: 3499,
      featured: false,
      timeline: "8-12 weeks"
    },

    {
      id: "ai",
      name: t.bundles.items.ai.name,
      desc: t.bundles.items.ai.desc,
      target: t.bundles.items.ai.target,
      features: t.bundles.items.ai.features,
      priceStart: 3499,
      priceLater: 3999,
      featured: false,
      timeline: "10-14 weeks"
    },
  ];
}