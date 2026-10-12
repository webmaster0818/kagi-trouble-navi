// TOP「エリアから探す」用のエリア一覧。app/area/<slug>/ に実在するページだけを並べる。
// 東京都は別枠（23区＋多摩）。関東には東京都を含めない。
export type AreaLink = { slug: string; label: string };
export type Prefecture = { name: string; areas: AreaLink[] };
export type Region = { name: string; prefectures: Prefecture[] };

const a = (slug: string, label: string): AreaLink => ({ slug, label });

export const tokyo = {
  top: a("tokyo", "東京都"),
  wards: [
    a("chiyoda-ku", "千代田区"), a("chuo-ku", "中央区"), a("minato-ku", "港区"), a("shinjuku-ku", "新宿区"),
    a("bunkyo-ku", "文京区"), a("taito-ku", "台東区"), a("sumida-ku", "墨田区"), a("koto-ku", "江東区"),
    a("shinagawa-ku", "品川区"), a("meguro-ku", "目黒区"), a("ota-ku", "大田区"), a("setagaya-ku", "世田谷区"),
    a("shibuya-ku", "渋谷区"), a("nakano-ku", "中野区"), a("suginami-ku", "杉並区"), a("toshima-ku", "豊島区"),
    a("kita-ku", "北区"), a("arakawa-ku", "荒川区"), a("itabashi-ku", "板橋区"), a("nerima-ku", "練馬区"),
    a("adachi-ku", "足立区"), a("katsushika-ku", "葛飾区"), a("edogawa-ku", "江戸川区"),
  ],
  tama: [
    a("hachioji", "八王子市"), a("machida", "町田市"), a("tachikawa", "立川市"),
    a("musashino", "武蔵野市"), a("chofu", "調布市"), a("fuchu", "府中市"),
  ],
};

export const regions: Region[] = [
  {
    name: "北海道・東北",
    prefectures: [
      { name: "北海道", areas: [a("sapporo", "札幌市"), a("sapporo-chuo", "札幌市中央区"), a("sapporo-kita", "札幌市北区"), a("asahikawa", "旭川市"), a("hakodate", "函館市"), a("kushiro", "釧路市"), a("tomakomai", "苫小牧市")] },
      { name: "青森県", areas: [a("aomori", "青森市"), a("hachinohe", "八戸市"), a("hirosaki", "弘前市")] },
      { name: "岩手県", areas: [a("morioka", "盛岡市")] },
      { name: "宮城県", areas: [a("sendai", "仙台市")] },
      { name: "秋田県", areas: [a("akita", "秋田市")] },
      { name: "山形県", areas: [a("yamagata", "山形市")] },
      { name: "福島県", areas: [a("fukushima", "福島市"), a("koriyama", "郡山市"), a("iwaki", "いわき市")] },
    ],
  },
  {
    name: "関東",
    prefectures: [
      { name: "茨城県", areas: [a("mito", "水戸市"), a("tsukuba", "つくば市"), a("hitachi", "日立市")] },
      { name: "栃木県", areas: [a("utsunomiya", "宇都宮市"), a("oyama", "小山市")] },
      { name: "群馬県", areas: [a("maebashi", "前橋市"), a("takasaki", "高崎市")] },
      { name: "埼玉県", areas: [a("saitama", "さいたま市"), a("saitama-omiya", "さいたま市大宮区"), a("kawaguchi", "川口市"), a("kawagoe", "川越市"), a("tokorozawa", "所沢市"), a("koshigaya", "越谷市"), a("soka", "草加市"), a("kasukabe", "春日部市"), a("ageo", "上尾市"), a("kumagaya", "熊谷市")] },
      { name: "千葉県", areas: [a("chiba", "千葉市"), a("funabashi", "船橋市"), a("ichikawa", "市川市"), a("matsudo", "松戸市"), a("kashiwa", "柏市"), a("ichihara", "市原市"), a("nagareyama", "流山市"), a("urayasu", "浦安市")] },
      { name: "神奈川県", areas: [a("yokohama", "横浜市"), a("yokohama-kohoku", "横浜市港北区"), a("yokohama-tsurumi", "横浜市鶴見区"), a("yokohama-totsuka", "横浜市戸塚区"), a("yokohama-aoba", "横浜市青葉区"), a("kawasaki", "川崎市"), a("kawasaki-kawasaki", "川崎市川崎区"), a("kawasaki-nakahara", "川崎市中原区"), a("sagamihara", "相模原市"), a("yokosuka", "横須賀市"), a("fujisawa", "藤沢市"), a("hiratsuka", "平塚市"), a("chigasaki", "茅ヶ崎市"), a("yamato", "大和市"), a("atsugi", "厚木市"), a("odawara", "小田原市")] },
    ],
  },
  {
    name: "北陸・甲信越",
    prefectures: [
      { name: "新潟県", areas: [a("niigata", "新潟市"), a("nagaoka", "長岡市"), a("joetsu", "上越市")] },
      { name: "富山県", areas: [a("toyama", "富山市"), a("takaoka", "高岡市")] },
      { name: "石川県", areas: [a("kanazawa", "金沢市")] },
      { name: "福井県", areas: [a("fukui", "福井市")] },
      { name: "山梨県", areas: [a("kofu", "甲府市")] },
      { name: "長野県", areas: [a("nagano", "長野市"), a("matsumoto", "松本市")] },
    ],
  },
  {
    name: "東海",
    prefectures: [
      { name: "岐阜県", areas: [a("gifu", "岐阜市"), a("ogaki", "大垣市")] },
      { name: "静岡県", areas: [a("shizuoka", "静岡市"), a("hamamatsu", "浜松市"), a("numazu", "沼津市"), a("fuji", "富士市"), a("fujinomiya", "富士宮市")] },
      { name: "愛知県", areas: [a("nagoya", "名古屋市"), a("nagoya-naka", "名古屋市中区"), a("nagoya-chikusa", "名古屋市千種区"), a("nagoya-meito", "名古屋市名東区"), a("toyohashi", "豊橋市"), a("okazaki", "岡崎市"), a("ichinomiya", "一宮市"), a("kasugai", "春日井市"), a("toyota", "豊田市"), a("anjo", "安城市"), a("kariya", "刈谷市"), a("toyokawa", "豊川市")] },
      { name: "三重県", areas: [a("tsu", "津市"), a("yokkaichi", "四日市市"), a("suzuka", "鈴鹿市")] },
    ],
  },
  {
    name: "近畿",
    prefectures: [
      { name: "滋賀県", areas: [a("otsu", "大津市"), a("kusatsu", "草津市")] },
      { name: "京都府", areas: [a("kyoto", "京都市"), a("kyoto-nakagyo", "京都市中京区"), a("kyoto-fushimi", "京都市伏見区"), a("uji", "宇治市")] },
      { name: "大阪府", areas: [a("osaka", "大阪市"), a("osaka-kita", "大阪市北区"), a("osaka-chuo", "大阪市中央区"), a("osaka-yodogawa", "大阪市淀川区"), a("osaka-hirano", "大阪市平野区"), a("sakai", "堺市"), a("higashiosaka", "東大阪市"), a("toyonaka", "豊中市"), a("suita", "吹田市"), a("takatsuki", "高槻市"), a("hirakata", "枚方市"), a("ibaraki", "茨木市"), a("neyagawa", "寝屋川市"), a("yao", "八尾市"), a("kishiwada", "岸和田市"), a("izumi", "和泉市")] },
      { name: "兵庫県", areas: [a("kobe", "神戸市"), a("kobe-chuo", "神戸市中央区"), a("kobe-nada", "神戸市灘区"), a("himeji", "姫路市"), a("amagasaki", "尼崎市"), a("nishinomiya", "西宮市"), a("akashi", "明石市"), a("kakogawa", "加古川市"), a("takarazuka", "宝塚市"), a("itami", "伊丹市"), a("kawanishi", "川西市"), a("sanda", "三田市")] },
      { name: "奈良県", areas: [a("nara", "奈良市")] },
      { name: "和歌山県", areas: [a("wakayama", "和歌山市")] },
    ],
  },
  {
    name: "中国",
    prefectures: [
      { name: "鳥取県", areas: [a("tottori", "鳥取市")] },
      { name: "島根県", areas: [a("matsue", "松江市")] },
      { name: "岡山県", areas: [a("okayama", "岡山市"), a("kurashiki", "倉敷市")] },
      { name: "広島県", areas: [a("hiroshima", "広島市"), a("hiroshima-naka", "広島市中区"), a("fukuyama", "福山市"), a("kure", "呉市"), a("higashihiroshima", "東広島市"), a("onomichi", "尾道市"), a("hatsukaichi", "廿日市市")] },
      { name: "山口県", areas: [a("yamaguchi", "山口市"), a("shimonoseki", "下関市")] },
    ],
  },
  {
    name: "四国",
    prefectures: [
      { name: "徳島県", areas: [a("tokushima", "徳島市")] },
      { name: "香川県", areas: [a("takamatsu", "高松市")] },
      { name: "愛媛県", areas: [a("matsuyama", "松山市"), a("imabari", "今治市")] },
      { name: "高知県", areas: [a("kochi", "高知市")] },
    ],
  },
  {
    name: "九州・沖縄",
    prefectures: [
      { name: "福岡県", areas: [a("fukuoka", "福岡市"), a("fukuoka-chuo", "福岡市中央区"), a("fukuoka-hakata", "福岡市博多区"), a("fukuoka-nishi", "福岡市西区"), a("kitakyushu", "北九州市"), a("kurume", "久留米市")] },
      { name: "佐賀県", areas: [a("saga", "佐賀市")] },
      { name: "長崎県", areas: [a("nagasaki", "長崎市"), a("sasebo", "佐世保市")] },
      { name: "熊本県", areas: [a("kumamoto", "熊本市")] },
      { name: "大分県", areas: [a("oita", "大分市")] },
      { name: "宮崎県", areas: [a("miyazaki", "宮崎市")] },
      { name: "鹿児島県", areas: [a("kagoshima", "鹿児島市")] },
      { name: "沖縄県", areas: [a("naha", "那覇市")] },
    ],
  },
];

export const allAreaSlugs = [
  tokyo.top.slug,
  ...tokyo.wards.map((w) => w.slug),
  ...tokyo.tama.map((w) => w.slug),
  ...regions.flatMap((r) => r.prefectures.flatMap((p) => p.areas.map((x) => x.slug))),
];
