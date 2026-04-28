/* ============================================================
   data.js — Product Catalogue
   Edit this file to add / update / remove products.
   Categories: "gate" | "wall" | "hanging"
   ============================================================ */

const products = [

  /* ── Gate Lights ─────────────────────────────────────────── */
  { id:1,  name:"Gate Light 1",  code:"GL-001", category:"gate",
    image:"https://i.ibb.co/4Z2RxY8D/Whats-App-Image-2026-04-26-at-11-04-59-PM-1.jpg",
    desc:"Elegant handcrafted gate light. Casts a warm, soft glow perfect for any entrance." },

  { id:2,  name:"Gate Light 2",  code:"GL-002", category:"gate",
    image:"https://i.ibb.co/Vc9XWpHb/Whats-App-Image-2026-04-28-at-4-58-18-PM-2.jpg",
    desc:"Refined gate light with crystal-clear panel. Creates striking light patterns on surrounding surfaces." },

  { id:3,  name:"Gate Light 3",  code:"GL-003", category:"gate",
    image:"https://i.ibb.co/Vd1wk3n/Whats-App-Image-2026-04-28-at-4-58-19-PM.jpg",
    desc:"Clean linear silhouette with milky diffuser. A modern statement for any gate or entrance." },

  { id:4,  name:"Gate Light 4",  code:"GL-004", category:"gate",
    image:"https://i.ibb.co/ZzY607xW/Whats-App-Image-2026-04-28-at-4-58-19-PM-1.jpg",
    desc:"Sleek design with clear panel. Delivers crisp, defined illumination at your entrance." },

  { id:5,  name:"Gate Light 5",  code:"GL-005", category:"gate",
    image:"https://i.ibb.co/mCJFyKrx/Whats-App-Image-2026-04-26-at-11-05-03-PM.jpg",
    desc:"Premium body paired with a clear shade. A timeless design that complements any architecture." },

  { id:6,  name:"Gate Light 6",  code:"GL-006", category:"gate",
    image:"https://i.ibb.co/S4rMXCdG/Whats-App-Image-2026-04-28-at-4-58-19-PM-2.jpg",
    desc:"Sophisticated frame with milky diffuser for a soft, inviting entrance glow." },

  { id:7,  name:"Gate Light 7",  code:"GL-007", category:"gate",
    image:"https://i.ibb.co/gZ3Bk7bY/Whats-App-Image-2026-04-28-at-5-43-39-PM.jpg",
    desc:"Bold lattice with milky panel. Makes a confident, luxury statement at night." },

  { id:8,  name:"Gate Light 8",  code:"GL-008", category:"gate",
    image:"https://i.ibb.co/hx1Bvvg7/Whats-App-Image-2026-04-28-at-4-58-17-PM.jpg",
    desc:"Striking design with clear diffuser — dramatic shadow patterns that transform any gate." },

  { id:9,  name:"Gate Light 9",  code:"GL-009", category:"gate",
    image:"https://i.ibb.co/rKyXdq3G/Whats-App-Image-2026-04-28-at-4-58-16-PM.jpg",
    desc:"Contemporary profile with milky diffuser. Effortlessly blends into modern facades." },

  { id:10, name:"Gate Light 10", code:"GL-010", category:"gate",
    image:"https://i.ibb.co/Kj5ttj3V/Whats-App-Image-2026-04-26-at-11-05-03-PM-1.jpg",
    desc:"Sharp linear design with clear panel — strong, architectural, and unmistakably premium." },

  /* ── Wall Lights ─────────────────────────────────────────── */
  { id:20, name:"Wall Light 1",  code:"WL-001", category:"wall",
    image:"https://i.ibb.co/DgPKwghp/Whats-App-Image-2026-04-26-at-11-04-57-PM.jpg",
    desc:"Pristine wall light with clear diffuser. Brightens interiors while adding decorative texture." },

  { id:21, name:"Wall Light 2",  code:"WL-002", category:"wall",
    image:"https://i.ibb.co/sSDf7SG/Whats-App-Image-2026-04-26-at-11-04-56-PM-1.jpg",
    desc:"Elegant wall light with milky diffuser — soft ambient glow for living rooms and corridors." },

  { id:22, name:"Wall Light 3",  code:"WL-003", category:"wall",
    image:"https://i.ibb.co/Gv4YwRM6/Whats-App-Image-2026-04-26-at-11-04-56-PM.jpg",
    desc:"Minimalist wall light with clear panel. Clean lines that complement any decor." },

  { id:23, name:"Wall Light 4",  code:"WL-004", category:"wall",
    image:"https://i.ibb.co/SY1cR5d/Whats-App-Image-2026-04-26-at-11-04-55-PM-1.jpg",
    desc:"Wall light with milky diffuser. Diffused glow that creates a calm, serene ambiance." },

  { id:24, name:"Wall Light 5",  code:"WL-005", category:"wall",
    image:"https://i.ibb.co/Zpjq1TnL/Whats-App-Image-2026-04-26-at-11-04-55-PM.jpg",
    desc:"Classic construction with milky shade. Versatile elegance that suits every room." },

  { id:25, name:"Wall Light 6",  code:"WL-006", category:"wall",
    image:"https://i.ibb.co/YFSY9Tm9/Whats-App-Image-2026-04-26-at-11-04-54-PM-2.jpg",
    desc:"Wall light with clear diffuser — bright, focused illumination with a polished finish." },

  { id:26, name:"Wall Light 7",  code:"WL-007", category:"wall",
    image:"https://i.ibb.co/PswFngyS/Whats-App-Image-2026-04-26-at-11-04-54-PM-1.jpg",
    desc:"Dramatic wall light with clear panel. Bold character for accent and feature walls." },

  { id:27, name:"Wall Light 8",  code:"WL-008", category:"wall",
    image:"https://i.ibb.co/RkFgZzGD/Whats-App-Image-2026-04-26-at-11-04-54-PM.jpg",
    desc:"Luxurious wall light with milky diffuser. Warm, moody ambiance for premium interiors." },

  { id:28, name:"Wall Light 9",  code:"WL-009", category:"wall",
    image:"https://i.ibb.co/W4GMxw27/Whats-App-Image-2026-04-26-at-11-04-53-PM-1.jpg",
    desc:"Handcrafted wall light with refined finish. Perfect for hallways and living spaces." },

  { id:29, name:"Wall Light 10", code:"WL-010", category:"wall",
    image:"https://i.ibb.co/QF8LjHXy/Whats-App-Image-2026-04-26-at-11-04-53-PM.jpg",
    desc:"Premium wall light with elegant detailing. Adds a sophisticated touch to any wall." },

  /* ── Hanging Lights ──────────────────────────────────────── */
  { id:40, name:"Hanging Light 1", code:"HL-001", category:"hanging",
    image:"https://i.ibb.co/ccpHn2s4/Whats-App-Image-2026-04-26-at-11-05-06-PM.jpg",
    desc:"Stunning handcrafted hanging light. A centrepiece that transforms any room with golden warmth." },

  { id:41, name:"Hanging Light 2", code:"HL-002", category:"hanging",
    image:"https://i.ibb.co/sp3QJN8q/Whats-App-Image-2026-04-26-at-11-05-05-PM-1.jpg",
    desc:"Elegant pendant light with intricate detailing. Perfect for dining rooms and foyers." },

  { id:42, name:"Hanging Light 3", code:"HL-003", category:"hanging",
    image:"https://i.ibb.co/6J1wKx6G/Whats-App-Image-2026-04-26-at-11-05-05-PM.jpg",
    desc:"Luxury hanging light with warm diffused glow. Crafted for those who appreciate fine detail." },

  { id:43, name:"Hanging Light 4", code:"HL-004", category:"hanging",
    image:"https://i.ibb.co/nNn32M7b/Whats-App-Image-2026-04-26-at-11-05-00-PM.jpg",
    desc:"Statement hanging light with premium finish. Creates a dramatic focal point in any space." },

];
