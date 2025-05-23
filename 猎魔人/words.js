const tooltips = {
    "颊": "颊(jiá):[名] 脸的两侧。",
    "瞥": "瞥(piē):[动] 短时间地粗略的看。",
    "搡": "搡(sǎng):[动] 推；挤。",
    "龇": "龇(zī):[动] 张开嘴露出牙齿。",
    "咧": "咧(liě):[动] 嘴角向两边伸展。",
    "掳": "掳(lǔ):[动] 抢取、抢夺。",
    "冕": "冕(miǎn):[名] 古代帝王、诸侯等所戴的礼帽。也专指帝王的皇冠。",
    "妲": "妲(dá):[名] 女子人名用字。",
    "蜷": "蜷(quán):[动] (肢体）弯曲，不伸展。",
    "觑": "觑(qù):[动] 瞧；看。",
    "颌": "颌(hé):[名] 构成口腔上下部的骨骼和肌肉组织。",
    "噙": "噙(qín):[动] 含住；含着。",
    "荠": "荠(jì):[名] 草本植物。叶羽状分裂，花白色。",
    "谲": "谲(jué):[动] 欺诈；玩弄手段。",
    "谬": "谬(miù):[名] 错误；不合情理。",
    "袤": "袤(mào):[名] 南北距离的长度，与‘广’相对。泛指宽度。",
    "阖": "阖(mào):[动] 关闭、闭合。",
    "椎": "椎(zhuī):[名] 动物背部中央骨柱的短骨。",
    "榛": "榛(zhēn):[名] 植物名。落叶灌木或小乔木。",
    "靛": "靛(diàn):[名] 蓝色和紫色混合而成的一种颜色。亦称‘靛蓝’、‘靛青’、‘蓝靛’。",
    "隼": "隼(sǔn):[名] 鸟名。翅膀窄而尖，上嘴呈钩曲状，背青黑色，尾尖白色，腹部黄色。",
    "髓": "髓(suǐ):[名] 骨头的空腔中的凝脂。",
    "颤": "颤(chàn):[动] 发抖、抖动。",
    "圃": "圃(pǔ):[名] 种植蔬菜、花草或瓜果的园地。",
    "鞠": "鞠(jū):[动] 弯曲着身子、弯着腰。",
    "褥": "褥(rù):[名] 用以坐、卧的垫具。",
    "裴": "裴(péi):[名] 姓。",
    "垛": "垛(duǒ):[名] 建筑物突出的部分，用以支撑或掩蔽。",
    "濒": "濒(bīn):[动] 接近、将、临。",
    "娅": "娅(yà):[名] 姊妹二人丈夫的互相称谓。",
    "虔": "虔(qián):[名] 恭敬；诚心。",
    "芮": "芮(ruì):[形] 草初生的样子。",
    "颚": "颚(è):[名] 分隔口腔和鼻腔的组织。",
    "熠": "熠(yì):[形] 光耀的；鲜明的。",
    "帕": "帕(pà):[名] 包头或擦手、脸用的布或绸，多为方形。",
    "唿": "唿(hū):[象] 风声。",
    "茨": "茨(cí):[名] 用芦苇、茅草盖的房子。",
    "撇": "撇(piě):[动] 斜向、偏向一边。",
    "酗": "酗(xù):[动] 沉迷于酒；无节制地喝酒。",
    "鹫": "鹫(jiù):[名] 鸟名。亦称‘雕’，一种猛禽，毛色深褐，体大雄壮，嘴呈钩状。",
    "隘": "隘(ài):[名] 险要的通道、地方、路口。",
    "聒": "聒(guō):[动] 声音吵闹、嘈杂。",
    "唷": "唷(yō):[叹] 表示惊讶、疑问。",
    "斓": "斓(lán):[形] 颜色驳杂；灿烂多彩。",
    "晃": "晃(huàng):[动] 摇动；摆动。",
    "盎": "盎(àng):[动] 茂盛；充盈。",
    "嗤": "嗤(chī):[动] 讥笑、嘲笑。",
    "鲶": "鲶(nián):[名] 鱼。身体表面多黏液，无鳞，头扁口阔，上下颌有四根须。",
    "泞": "泞(nìng):[名] 烂泥、泥浆。",
    "淤": "淤(yū):[名] 沉积的泥沙。",
    "扼": "扼(è):[动] 掐着；抓住。",
    "戟": "戟(jǐ):[名] 古代一种合戈、矛为一体的长柄兵器。",
    "攥": "攥(zuàn):[动] 用手抓住、握住。",
    "课": "课(kè):[动] 使交纳赋税；征收税款。",
    "诙": "诙(huī):[形] 说话风趣、幽默。",
    "掂": "掂(diān):&#10;&emsp;[动] 用手托着东西估量轻重。&#10;&emsp;[动] 思考、考虑。",
    "鼾": "鼾(hān):[名] 熟睡时粗重的鼻息声。",
    "弭": "弭(mǐ):[动] 停止；消除。",
    "褶": "褶(mǐ):[名] 衣服折叠而形成的印痕。",
    "嗡": "嗡(wēng):[象] 昆虫翅膀拍动的声音。",
    "饶": "饶(ráo):[动] 啰嗦；多嘴多舌。",
    "讷": "讷(nè):[形] 语言迟钝；言语艰难笨拙。",
    "渎": "渎(dú):[动] 轻慢；对人不恭敬。",
    "掸": "掸(dǎn):[动] 轻轻拂打或抽。",
    "旋": "旋(xuàn):[动] 打转、转圈。&#10;旋(xuán):[名] 同'漩(xuán)'，漩涡。",
    "汩": "汩(gǔ):[形] 水流的样子。",
    "镫": "镫(dèng):[名] 挂在马鞍两旁的铁制脚踏。",
    "垣": "垣(yuán):[名] 矮墙；墙。",
    "皓": "皓(hào):[形] 洁白；明亮。",
    "蹼": "蹼(pǔ):[名] 鸟类脚趾中间的薄膜，可用来划水。",
    "拗": "拗(ào):[形] 不顺口、不顺嘴。",
    "蜥": "蜥(xī):[名] 爬行动物，有四肢，尾巴很长，脚上有钩爪。",
    "珀": "珀(pò):[名] 琥珀。松柏树脂的化石。",
    "邸": "邸(dǐ):[名] 泛指官员办事或居住的处所。",
    "曦": "曦(xī):[名] 日光；阳光。",
    "畔": "畔(pàn):[名] 水边；田边。",
    "冢": "冢(zhǒng):[名] 坟墓；墓地。",
    "牡": "牡(mǔ):[名] 雄性的鸟或兽，亦指植物的雄株。",
    "咂": "咂(zā):[象] 舌尖抵住上颚发出吸气音，表示称赞、羡慕、惊讶等。",
    "贿": "贿(huì):[动] 以财物买通公职人员。",
    "惬": "惬(qiè):[形] 愉快、满意。",
    "阉": "阉(yān):[动] 割去男人的或雄性动物的生殖器。",
    "寻": "寻(xún):&#10;&emsp;[量] 古代的长度单位。一寻等于八尺。&#10;&emsp;[动] 找，搜求。",
    "勒": "勒(lēi):[动] 用绳子等捆住和套住，然后用力拉紧。&#10;勒(lè):&#10;&emsp;[名] 姓。&#10;&emsp;[动] 雕刻。",
    "壑": "壑(hè):[名] 坑谷；深沟。",
    "愠": "愠(yùn):[形] 生气、不满；怨恨。",
    "蓟": "蓟(jì):[名] 植物名。叶子大，花紫色。",
    "擤": "擤(xǐng):[动] 用手指捏住鼻孔，使鼻涕排出。",
    "纶": "纶(guān):[名] 用青丝带做的头巾。&#10;纶(lún):[名] 青丝绶带，古代官吏系印所用。现用做合成纤维的名称。",
    "喋": "喋(dié):[动] 啰唆，语言烦琐。",
    "鄙": "鄙(bǐ):[形] 卑贱；不高尚。",
    "媲": "媲(pì):[动] 相配；相称。",
    "紊": "紊(wěn):[形] 杂乱；混乱。",
    "眸": "眸(móu):[名] 眼珠，泛指眼睛。",
    "觐": "觐(jìn):[动] 朝见君主或朝拜圣地。",
    "秽": "秽(huì):[形] 肮脏；不洁净。",
    "噬": "噬(shì):[动] 咬；吞。",
    "驳": "驳(bó):[动] 否决他人的意见或要求。",
    "栖": "栖(qī):[动] 鸟类停留在树上或其他物体上。",
    "喙": "喙(huì):[名] 鸟类的嘴。",
    "橇": "橇(qiāo):[名] 用来在雪地上滑行的工具。",
    "锑": "锑(tī):[名] 金属元素，符号Sb。",
    "怏": "怏(yàng):[形] 不满；不高兴。",
    "湍": "湍(tuān):[形] 水势急速。",
    "颞": "颞(niè):[名] 头部两侧的部位。",
    "邃": "邃(suì):[形] 深远、深奥。",
    "颧": "颧(quán):[名] 面颊。",
    "嚣": "嚣(xiāo):[名] 喧闹、吵闹。",
    "翕": "翕(xī):[动] 合拢；合并。",
    "蓼": "蓼(liǎo):[名] 植物名。叶子长而狭，花紫色。",
    "悖": "悖(bèi):[动] 违背、违反。",
    "臆": "臆(yì):[副] 主观地；缺乏客观依据的。",
    "撮": "撮(zuǒ):[量] 表示成丛的毛发。",
    "黜": "黜(chù):[动] 降职或罢免。",
    "缟": "缟(gǎo):[形] 白色；洁白。",
    "楂": "楂(zhā):[名] 果实，果实呈红色，味酸。",
    "潺": "潺(chán):[象] 水流的声音。",
    "罄": "罄(qìng):[动] 用尽；消耗殆尽。",
    "咎": "咎(jiù):[动] 责备；追究罪过。",
    "踵": "踵(zhǒng):[名] 脚后跟。",
    "毡": "毡(zhān):[名] 用羊毛等制成的厚毯。",
    "锃": "锃(zèng):[形] 金属光泽。",
    "蹚": "蹚(tāng):[动] 走过水中。",
    "疮": "疮(chuāng):[名] 皮肤或黏膜上的病变。",
    "钴": "钴(gǔ):[名] 金属元素，符号Co。",
    "狞": "狞(níng):[形] 凶恶；狠毒。",
    "噘": "噘(juē):[动] 嘴唇向前突出。",
    "篝": "篝(gōu):[名] 用来烧火的器具。",
    "镳": "镳(biāo):[名] 马的嘴边的装饰物。",
    "抿": "抿(mǐn):[动] 嘴唇轻轻合拢。",
    "谑": "谑(xuè):[动] 开玩笑；言语捉弄。",
    "枭": "枭(xiāo):[名] 鸟名。头大，眼大，耳短，善捕食。",
    "涸": "涸(hé):[动] 水枯竭；干枯。",
    "髋": "髋(kuān):[名] 人体的骨盆部位。",
    "鲠": "鲠(gěng):[形] 喉咙堵塞的感觉。",
    "攫": "攫(jué):[动] 抓住；抢夺。",
    "疽": "疽(jū):[名] 皮肤或黏膜上的溃疡。",
    "垠": "垠(yín):[名] 边，岸，界限。",
    "迄": "迄(qì):[动] 到；直到。",
    "簇": "簇(cù):[动] 聚集；聚拢。",
    "舐": "舐(shì):[动] 用舌头舔。",
    "憩": "憩(qì):[动] 休息；歇息。",
    "鞣": "鞣(róu):[动] 使柔软，制成皮革。",
    "湮": "湮(yān):[动] 消灭；消失。",
    "蹩": "蹩(bié):[动] 走路不稳，跛行。",
    "鼬": "鼬(yòu):[名] 哺乳动物，身体细长，毛黄褐色。俗称'黄鼠狼'。",
    "颈": "颈(jǐng):[名] 脖子。",
    "睑": "睑(jiǎn):[名] 眼皮。",
    "粕": "粕(pò):[名] 酒曲中的残渣。",
    "蹙": "蹙(cù):[动] 聚拢；皱缩。",
    "鳏": "鳏(guān):[名] 无妻或丧妻的男人。",
    "疖": "疖(jiē):[名] 一种局部出现充血硬块的炎症。",
    "疣": "疣(yóu):[名] 一种皮肤上出现黄褐色的小疙瘩的皮肤病。",
    "衢": "衢(qú):[名] 大路；四通八达的道路。",
    "韂": "韂(chàn):[名] 马鞍子下面垫的东西，垂在马背两旁可以挡泥土。",
    "噶": "噶(gá):[名] 译音字。",
    "豢": "豢(huàn):[动] 喂养，特指喂养牲畜。",
    "徕": "徕(lái):[动] 招来；到来。",
    "鬣": "鬣(liè):[名] 胡须；兽颈上的长毛；鸟头上的毛。",
    "锆": "锆(gào):[名] 一种钢灰色、强延性、难熔、主要呈四价的金属元素。",
    "鸮": "鸮(xiāo):[名] 鸟名。俗称猫头鹰。",
    "赭": "赭(zhě):[名] 红褐色。",
    "蚧": "蚧(jiè):[名] 一种介壳虫。",
    "纡": "纡(yū):[动] 屈身；委屈。",
    "燹": "燹(xiǎn):[名] 野火。后指战火。",
    
    "鼩鼱": "鼩鼱(qú jīng):[名] 动物名。一种形似小鼠的哺乳动物。",
    "狺狺": "狺狺(yín yín):[名] 狗叫的声音。借指攻击性的言论。",
    "堞口": "堞口(dié kǒu):[名] 指女墙上的洞口。",
    "垩笔": "垩笔(è bǐ):[名] 粉笔。",
    "弗隆": "弗隆(fú lóng):[名] 长度单位，用作表示赛马途程距离，是指两头牛并排向前犁地且无需休息的最长距离，1弗隆约等于201.168米。",
    "忸怩": "忸怩(niǔ ní):[形] 羞愧或不大方的样子。",
    "卸轭": "卸轭(xiè è):[动] 卸下车辕。比喻解除重担。",
    "轻佻": "轻佻(qīng tiāo):[形] 轻浮；轻率。",
    "搪塞": "搪塞(táng sè):[动] 拖延；敷衍。",
    "涟漪": "涟漪(lián yī):[名] 水面上因风吹或物体投入而形成的波纹。",
    "宁芙": "宁芙(níng fú):[名] 古希腊神话中的女性神灵。也指美丽的女子。",
    "老鸨": "老鸨(lǎo bǎo):[名] 旧时称妓院的女主人。",
    "倾轧": "倾轧(qīng zhá):[动] 互相毁谤排挤。",
    "连枷": "连枷(lián jiā):[名] 一种农具。由一个长柄和一组平排的竹条或木条构成，用来拍打谷物。",
    "距毛": "距毛(jù máo):[名] 马蹄上后方的毛。",
    "茱萸": "茱萸(zhū yú):[名] 植物名。果实红色，味酸。",
    "哞哞": "哞哞(mōu mōu):[象] 牛叫的声音。",
    "椴树": "椴树(duàn shù):[名] 植物名。叶子大，花白色。",
    "侏儒": "侏儒(zhū rú):[名] 身材矮小的人。",
    "晕染": "晕染(yùn rǎn):[动] 指颜色渐次深浅地变化。",
    "正酣": "正酣(zhèng hān):[形] 正在热烈进行。",
    "黄疸": "黄疸(huáng dǎn):[名] 一种疾病，病人的皮肤、黏膜等部位因胆红素沉积而呈黄色。",
    "厄尔": "厄尔(è ěr):[名] 古代长度单位，约合45英寸，即114厘米。",
    "鱼鳔": "鱼鳔(yú biào):[名] 鱼的胆囊。",
    "牛蒡": "牛蒡(niú bàng):[名] 植物名。叶有长柄，心形互生，背面有毛，开淡紫色管状花。",
    "兢兢": "兢兢(jīng jīng):[形] 小心谨慎的样子。",
    "咄咄": "咄咄(duō duō):[形] 形容气势汹汹的样子。",
    "扼要": "扼要(è yào):[形] 抓住重点的；简明清晰的。",
    "飞地": "飞地(fēi dì):[名] 指被他国领土包围的领地。",
    "氤氲": "氤氲(yīn yūn):[形] 气味、烟雾等缭绕不散的样子。",
    "迁徙": "迁徙(qiān xǐ):[动] 迁移；迁移。",
    "思忖": "思忖(sī cǔn):[动] 思考；揣摩。",
    "镣铐": "镣铐(liào kào):[名] 脚镣与手铐。",
    "拨冗": "拨冗(bō rǒng):[动] 抽出时间来做某事。",
    "徘徊": "徘徊(pái huái):[动] 犹豫不决地来回走动。",
    "马厩": "马厩(mǎ jiù):[名] 马棚；马房。",
    "茶隼": "茶隼(chá sǔn):[名] 鸟名。体型较小，翅膀较长，尾巴较短，善于飞行。",
    "妩媚": "妩媚(wǔ mèi):[形] 姿态美好可爱。",
    "瞪羚": "瞪羚(dèng líng):[名] 动物名。体形纤细，四肢细长，奔跑迅速。",
    "愤懑": "愤懑(fèn mèn):[形] 愤怒、气愤、不满。",
    "裹挟": "裹挟(guǒ xié):[动] (风、水等)把别的东西卷入，使随着移动。",
    "颠簸": "颠簸(diān bǒ):[动] 上下震动；上下抖动。",
    "蹒跚": "蹒跚(pán shān):[动] 走路摇摇晃晃，不稳当的样子。",
    "嗝屁": "嗝屁(gé pì):[名] 死亡。",
    "马鬃": "马鬃(mǎ zōng):[形] 马颈上的长毛。",
    "痉挛": "痉挛(jìng luán):[形] 无意识的抽搐性肌肉运动。",
    "缄默": "缄默(jiān mò):[形] 闭口不言。",
    "臃肿": "臃肿(yōng zhǒng):[形] 形容物体粗大笨重，不灵活。",
    "秃鹫": "秃鹫(tū jiù):[名] 大型猛禽。嘴弯曲，脚有力，善于捕食。",
    "麝香": "麝香(shè xiāng):[名] 雄麝肚脐和生殖器之间的腺体的分泌物。",
    "掠夺": "掠夺(lüè duó):[动] 凭借暴力抢劫、抢夺。",
    "剽悍": "剽悍(piāo hàn):[形] 勇猛；勇敢。",
    "解剖": "解剖(jiě pōu):[动] 用特制的刀、剪把人体或动植物体表分解、打开。",
    "夸脱": "夸脱(kuā tuō):[名] 一种容量单位。一夸脱约等于1.136升。",
    "颠茄": "颠茄(diān qié):[名] 植物名。一种有毒的植物，微红色的铃形的花，黑色发亮的浆果。",
    "菟葵": "菟葵(tú kuí):[名] 草本植物。叶子大，花大，花瓣呈黄色。",
    "关卡": "关卡(guān qiǎ):[名] 设在要道上的关口，用以防御。",
    "绯红": "绯红(fēi hóng):[形] 鲜红的颜色。",
    "戍守": "戍守(shù shǒu):[动] 驻守、守卫。",
    "茴香": "茴香(huí xiāng):[名] 年生草本植物。香酒及烹饪中用作香料。",
    "贻贝": "贻贝(yí bèi):[名] 软体动物。壳三角形。",
    "鳗鱼": "鳗鱼(mán yú):[名] 细长如蛇的真骨鱼类。",
    "嗫嚅": "嗫嚅(niè rú):[动] 想说而又吞吞吐吐不敢说出来。",
    "飓风": "飓风(jù fēng):[名] 非常强烈的气旋、大风。",
    "觊觎": "觊觎(jì yú):[动] 非分的希望或企图。",
    "亵渎": "亵渎(xiè dú):[动] 轻慢；冒犯、不恭敬。",
    "龌龊": "龌龊(wò chuò):[形] 品质恶劣，思想不纯正。",
    "玳瑁": "玳瑁(dài mào):[名] 海洋里的一种食肉性海龟。",
    "水蛭": "水蛭(shuǐ zhì):[名] 肉食性或吸血性动物。",
    "芜菁": "芜菁(wú jīng):[名] 草本植物。根肉质白色或黄色。",
    "苜蓿": "苜蓿(mù xù):[名] 一种豆科牧草植物，小叶片呈倒卵状长圆形，蓝紫色花。",
    "匕首": "匕首(bǐ shǒu):[名] 短剑或狭长的短刀。",
    "吝啬": "吝啬(lìn sè):[形] 小气；舍不得钱财。",
    "嶙峋": "嶙峋(lín xún):[形] 人或动物消瘦、露骨。",
    "踉跄": "踉跄(liàng qiàng):[动] 走路不稳；跌跌撞撞。",
    "颠簸": "颠簸(diān bǒ):[动] 上下震动；上下抖动。",
    "喷嚏": "喷嚏(pēn tì):[名] 鼻粘膜受刺激，由鼻孔喷出并发出声音的现象。",
    "荆棘": "荆棘(jīng jí):[名] 泛指山野丛生多刺的灌木。",
    "摩挲": "摩挲(mó suō):[动] 用手抚摸、抚摩。",
    "翩跹": "翩跹(piān xiān):[形] 轻快地旋转舞动的样子。",
    "嘟囔": "嘟囔(dū nang):[动] 不断地、含混地自言自语。",
    "调侃": "调侃(tiáo kǎn):[动] 言语揶揄、嘲讽、挖苦。",
    "腕尺": "腕尺(wàn chǐ):[名] 测量单位。一个希腊腕尺约46.38厘米；一个罗马腕尺约44.37厘米。",
    "大戟": "大戟(dà jǐ):[名] 草药名，也称‘下马仙’。直茎高二三尺，中空，折断有白浆。",
    "蓖麻": "蓖麻(bì má):[名] 植物名。叶子大，掌状分裂。",
    "毛茛": "毛茛(máo gèn):[名] 植物名。茎叶有茸毛，单叶，掌状分裂，花黄色，有光泽。",
    "混淆": "混淆(hùn xiáo):[动] 混杂；使混乱。",
    "哐啷": "哐啷(kuāng lāng):[象] 金属撞击的声音。",
    "加仑": "加仑(jiā lún):[名] 容量单位。一加仑等于3.785升。",
    "海岬": "海岬(hǎi jiǎ):[名] 深入海中的尖形陆地。",
    "黝黑": "黝黑(yǒu hēi):[形] 黑而发亮。",
    "犒劳": "犒劳(kào láo):[动] 用饭食等款待或奖赏。",
    "搭讪": "搭讪(dā shàn):[动] 用言语或行动引起别人的注意。",
    "鸬鹚": "鸬鹚(lú cí):[名] 鸟名。体长，颈长，善于潜水捕鱼。",
    "鲦鱼": "鲦鱼(tiáo yú):[名] 鱼名。体侧扁，头小，口大，鳞细。",
    "天堑": "天堑(tiān qiàn):[名] 指自然界中的天然障碍。",
    "驳船": "驳船(bó chuán):[名] 本身无自航能力，需依赖拖船拖带的船只，一般用来载人或货物。",
    "从价": "从价(cóng jià):[名] 原文为拉丁语，指进口商品的价格。",
    "啁啾": "啁啾(zhōu jiū):[象] 鸟叫声、奏乐声等。",
    "酩酊": "酩酊(mǐng dǐng):[形] 形容醉得很厉害。",
    "付梓": "付梓(fù zǐ):[动] 旧时指书稿雕版印行，即排印书籍。",
    
    "换生儿": "换生儿(huā shēng ér):[名] 指欧洲民间传说中被妖怪偷换的孩子。",
    "花岗岩": "花岗岩(huā gāng yán):[名] 生成于地壳深处的酸性火成岩。",
    "落水洞": "落水洞(luò shuǐ dòng):[名] 指地表水渗入地下时形成的洞窟，多为暴雨冲刷磨蚀而成。",
    "山毛榉": "山毛榉(shān máo jǔ):[名] 植物名。叶子大，花黄色，果实为坚果。",
    "几丁质": "几丁质(jī dīng zhì):[名] 又名甲壳胺，一般指节肢动物的身体表面分泌的一种物质。",
    "槲寄生": "槲寄生(hú jì shēng):[名] 植物名。寄生在槲树上，茎短，叶片小，花白色，果实红色。",
    "打牙祭": "打牙祭(dǎ yá jì):[动] 享用久未曾吃的、丰盛的菜肴。",
    "花岗岩": "花岗岩(huā gāng yán):[名] 生成于地壳深处的酸性火成岩。",
    "蒲式耳": "蒲式耳(huā gāng yán):[名] 英美制计量单位。1蒲式耳在英国等于8加仑，相当于36.3688升。在美国，1蒲式耳相当于35.238升。",
    "下流坯": "下流坯(xià liú pī):[名] 品质低劣的人。",
    "矢车菊": "矢车菊(shǐ chē jú):[名] 一年生草本植物，茎细长，叶子条形，花有蓝、紫、粉红、白等颜色。",
    
    "厥功至伟": "厥功至伟(jué gōng zhì wěi):[形] 指在某件事情上，功劳很大",
    "心无旁骛": "心无旁骛(xīn wú páng wù):[形] 指专心致志，不分心。",
    "载歌载舞": "载歌载舞(zài gē zài wǔ):[动] 形容欢乐的歌舞声。",
    "孑然一身": "孑然一身(jié rán yī shēn):[名] 形单影只，孤独一人。",
    "置若罔闻": "置若罔闻(zhì ruò wǎng wén):[形] 形容对别人的话或事情不予理睬。",
    "循规蹈矩": "循规蹈矩(xún guī dǎo jǔ):[形] 形容拘守成规，不敢有所变动。",
    "寡廉鲜耻": "寡廉鲜耻(guǎ lián xiǎn chǐ):[形] 形容人品败坏，没有廉耻。",
    "噼哩乓啷": "噼哩乓啷(pī lǐ pāng lāng):[形] 连续不断的爆裂、拍打或东西撞击等的声音。",
    "冠冕堂皇": "冠冕堂皇(guān miǎn táng huáng):[形] 原形容外表庄严或正大的样子。后多用作形容外表华丽，内里虚伪。",
    "嘁哩喀喳": "嘁哩喀喳(qī lī kā chā):[形] 形容说话做事干脆、利索。",
    "毋庸置疑": "毋庸置疑(wú yōng zhì yí):[形] 指事实非常明显或理由非常充足，没有必要持怀疑态度。",
    
    "东莨菪碱": "东莨菪碱(dōng làng dàng jiǎn):[名] 一种有机物。存在于茄科植物中，通常会减缓心率、产生激动、不安、神志错乱或语无伦次等中枢兴奋症状，可用于麻醉镇痛、止咳、平喘。",
    
    "标灯": "将装有石油或沥青的铁篮挂在木杆或柱子顶端，点燃后用来照明。",
    "铁金": "字面意思为含铁的黄金，是一种虚构的天然金铁合金。",
    "海得": "西方古时的土地测量单位。",
    "友克": "西方古时的土地测量单位。",
    "传动": "即'心灵传动'。",
    "派克": "意为梭子鱼。",
    "木精": "树精的一种，但与普通树精不同，她们与特定的树木有某种特殊的联系。",
    "马克": "弗罗林和马克是尼弗迦德帝国的货币，六十弗罗林合一马克。",
    "风箱": "指的是欧洲使用的风箱，由两个握柄、气阀和喷嘴组成，并非我国的箱式结构。",
    "钻石": "扑克牌中的“方块”也指“钻石”。",
    "纪昀": "前三句出自《阅微草堂笔记·卷十·如是我闻（四）》，后两句为仿写。",
    "四艺": "指中世纪的算术、几何、天文、音乐四门学科。",
    "桶子牌": "类似现实世界里的桥牌。",
    "鸢尾花": "百合目鸢尾科的一种花卉，但欧洲人经常以百合代指。",
    "无穷动": "一种音乐体裁的名称。特点是以快速音符演奏的器乐曲，从头到尾贯穿着急速的节奏。",
    "冬营税": "军队收取的税务，用于在冬天替士兵安排住处。",
    "人头牌": "扑克牌中的J、Q、K。",
    "剃头匠": "在中世纪的欧洲，除了理发刮脸，剃头匠常常还会兼职外科医生。",
    "米尔瑟": "上古语，即米尔特。",
    "迪斯温": "迪斯温出自上古语迪斯温·雅丹·伊恩·卡恩·爱普·蒙路德，意为在敌人墓上起舞的白焰，是尼弗迦德皇帝恩希尔·恩瑞斯的绰号。",
    "下雅拉": "尼弗迦德人对雅鲁加河的称呼。",
    "法尔嘉": "上古语中就叫Gvalch’ca，意思是'年幼的猎鹰'。",
    "杜罗德": "与“蠢人”一词原文发音相近。",
    "布罗尼": "恩希尔情妇德乌菈·特莱芬·布罗尼的丈夫",
    "奥托兰": "意为'蒿雀'，法国人认为是种奢华的美食，食用时需头罩白巾保持仪式感，且有壮阳功效。",
    "恩布拉": "在北欧神话中，众神用梣木枝创造男人，取名阿斯克；用榆树枝创造女人，即为恩布拉。",
    "丰饶角": "出自希腊与罗马神话，是丰饶富裕的象征。",
    "瑞那鲁格": "即诸神的黄昏。",
    "卡罗伯塔": "卡罗琳娜·罗伯塔的简称。",
    "蠢人多话": "出自俗语，全句为'智者寡言，蠢人多话。'。",
    "安娜叶塔": "安娜·亨利叶塔的简称。",
    "瑟梅斯特": "意为'学期'。",
    "左马驭者": "四匹马拉车行驶时，通常会有一名左马驭者负责拉住前方左边马的缰绳，以便控制马车前进的方向。",
    "柯佐耶德": "典出波兰民间传说，讲述一位名叫克拉库斯的鞋匠用智谋杀死喷火恶龙的故事。后人为纪念他，将他所在的小村命名为克拉科夫，即后来的克拉科夫市。",
    "理发医师": "指中世纪时兼任医师的理发师。",
    "慈悲短剑": "中世纪战场上用来杀死重伤者，赐予其'慈悲解脱'的武器。",
    "游荡诗人": "12至13世纪通常身兼讽刺诗作者与小丑的流浪学生。",
    "第五元素": "炼金术用语，指用四大元素提炼出的转化媒介，贤者之石的别称。",
    "尤瑞艾莉号": "戈尔贡三姐妹之一，蛇发女妖美杜莎的姐姐。",
    "比塞弗勒斯": "亚历山大大帝战马的名字。",
    "雕花贵人椅": "古罗马时期一种用于显示权威的豪华座椅。",
    "言语随风逝": "拉丁文谚语的前半段，全句为'言语随风逝，落笔方留存'。",
    "优先售卖权": "类似欧洲中世纪法律赋予的一种权利，让某些城市可以强迫过往商旅先在本地售卖一段时间，然后才能带着剩余货物离开。",
    "《生物论》": "下波萨达村的女先知历代相传一本古书，上面记载了各种奇异生物。《生物论》便是那部古书的抄本之一。",
    "德·斯塔尔": "暗指十八世纪法国著名女文人，有“女伏尔泰”之称的斯塔尔夫人。",
    "乔弗利·蒙克": "在第四卷《轻蔑时代》中，该书作者为妮娜·菲欧拉凡提。",
    "艾妮德·芬达贝": "与法兰茜丝卡是同一个人。",
    "蒙斯·卡尔乌斯": "'蒙特卡沃'的另一种叫法。",
    "卢克丽霞·维格": "卢克丽霞的原型是罗马传说中著名的贞女。",
    "天赋与艺术协会": "即“巫师会”的全称。",
    "西尔维斯特·布吉亚多": "该作者的姓氏意为“骗子”或“说谎者”。",
    "沃尔夫冈·阿玛多伊斯·山羊胡": "戏仿莫扎特的全名：沃尔夫冈·阿玛多伊斯·莫扎特。",
}