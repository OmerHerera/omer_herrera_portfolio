const photos = [
  {
    src: "https://res.cloudinary.com/omher/image/upload/v1648406374/blender/BB8_nox3nl.png",
    width: 6,
    height: 3
  },
  {
    src: "https://res.cloudinary.com/omher/image/upload/v1647592753/blender/arcade_04_bvbvue.png",
    width: 6,
    height: 3
  },
  {
    src: "https://res.cloudinary.com/omher/image/upload/v1647592758/blender/arcade_03_gykklo.png",
    width: 6,
    height: 3
  },
  {
    src: "https://res.cloudinary.com/omher/image/upload/v1647592757/blender/arcade_01_dobuu7.png",
    width: 6,
    height: 3
  },
  {
    src: "https://res.cloudinary.com/omher/image/upload/v1643570566/blender/boba_Helmets_k1irs6.png",
    width: 6,
    height: 3
  },
  {
    src: "https://res.cloudinary.com/omher/image/upload/v1643570566/blender/boba_helmets_2_sw4wnb.png",
    width: 6,
    height: 3
  },
  {
    src: "https://res.cloudinary.com/omher/image/upload/v1636455563/blender/Boba_ffu2l8.jpg",
    width: 6,
    height: 3
  },
  {
    src: "https://res.cloudinary.com/omher/image/upload/v1636455564/blender/Apples_twodxd.jpg",
    width: 6,
    height: 3
  },
  {
    src: "https://res.cloudinary.com/omher/image/upload/v1636455563/blender/Pears_hvvpbo.jpg",
    width: 6,
    height: 3
  },
  {
    src: "https://res.cloudinary.com/omher/image/upload/v1636455563/blender/Warehouse_spj62u.jpg",
    width: 6,
    height: 3
  },
  {
    src: "https://res.cloudinary.com/omher/image/upload/v1636455563/blender/deadpool_vhdncy.jpg",
    width: 6,
    height: 3
  },
  {
    src: "https://res.cloudinary.com/omher/image/upload/v1647592723/blender/Miau_Si_stf0nz.png",
    width: 5,
    height: 3
  },
  {
    src: "https://res.cloudinary.com/omher/image/upload/v1636455563/blender/HumanVsRobot_xkw4ph.jpg",
    width: 6,
    height: 3
  },
  {
    src: "https://res.cloudinary.com/omher/image/upload/v1636455563/blender/onoh_hc6myz.jpg",
    width: 3,
    height: 4
  },
  {
    src: "https://res.cloudinary.com/omher/image/upload/v1636454908/blender/donout0_o8gw9j.jpg",
    width: 4,
    height: 4
  },
  {
    src: "https://res.cloudinary.com/omher/image/upload/v1636454589/blender/Car_low_poly_gor3du.png",
    width: 6,
    height: 3
  },
  {
    src: "https://res.cloudinary.com/omher/image/upload/v1636454267/blender/pickup_ujh0n4.png",
    width: 6,
    height: 3
  },
  {
    src: "https://res.cloudinary.com/omher/image/upload/v1636454266/blender/Rocket_xsd8s8.png",
    width: 4,
    height: 3
  },
  {
    src: "https://res.cloudinary.com/omher/image/upload/v1636454264/blender/Cotagge_s5xxac.png",
    width: 6,
    height: 3
  },
  {
    src: "https://res.cloudinary.com/omher/image/upload/v1636454262/blender/Floating_r9fosf.png",
    width: 6,
    height: 3
  },
  {
    src: "  https://res.cloudinary.com/omher/image/upload/v1636454908/blender/donout_qvjfao.jpg",
    width: 3,
    height: 3
  },
  {
    src: "https://res.cloudinary.com/omher/image/upload/v1638008623/blender/Hanuka_mtxcty.png",
    width: 6,
    height: 3
  },
  {
    src: "https://res.cloudinary.com/omher/image/upload/v1639764658/blender/wizardTable_waewjo.png",
    width: 6,
    height: 3
  },
  {
    src: "https://res.cloudinary.com/omher/image/upload/v1642783470/blender/spaceShips_e96ll3.png",
    width: 5,
    height: 3
  },
  {
    src: "https://res.cloudinary.com/omher/image/upload/v1642783452/blender/Ballons_t9k0rt.png",
    width: 6,
    height: 3
  },
  {
    src: "https://res.cloudinary.com/omher/image/upload/v1642783451/blender/candyLand_vis3fu.png",
    width: 6,
    height: 3
  },
  {
    src: "https://res.cloudinary.com/omher/image/upload/v1642783422/blender/2022_yadvfk.png",
    width: 3,
    height: 3
  },



];
export default function handler(req, res) {
  res.status(200).json({ photos });
}
