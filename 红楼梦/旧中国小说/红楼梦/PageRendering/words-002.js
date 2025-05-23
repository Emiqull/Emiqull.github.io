﻿const tooltips = {
    // exisiting words
    "丧": "&#9752;丧(sàng):[动] 死亡；灭亡。&#10;&#9752;丧(sāng):[名] 在埋葬或火化前为死者举行的哀悼仪式。",
    "乃": "&#9752;乃(nǎi):[代] 他的。",
    "乾": "&#9752;乾(qián):[名] 八卦之一，代表天。",
    "仕": "&#9752;仕(shì):[动] 做官、当官。",
    "优": "&#9752;优(yōu):[名] 旧时指表演乐舞、演戏的人。",
    "佐": "&#9752;佐(zuǒ):[动] 辅助、帮助。",
    "倪": "&#9752;倪(ní):[名] 姓。",
    "傍": "&#9752;傍(bàng):[动] 依靠；靠近。",
    "僖": "&#9752;僖(xī):[名] 姓。",
    "冏": "&#9752;冏(jiǒng):[形] 光明、明亮。",
    "冗": "&#9752;冗(rǒng):[形] 多余的；无用的。",
    "冠": "&#9752;冠(guàn):[动] 头戴、戴上。&#10;&#9752;冠(guān):[名] 帽子。",
    "凊": "&#9752;凊(jìng):&#10;&emsp;&#10022;[形] 清凉、清爽。&#10;&emsp;&#10022;[动] 使清凉、使清爽。",
    "凝": "&#9752;凝(níng):[形] (表示程度)深、盛。",
    "几": "&#9752;几(jī):&#10;&emsp;&#10022;[副] 差不多，将近。&#10;&emsp;&#10022;[名] 小、矮的桌子。&#10;&#9752;几(jǐ):&#10;&emsp;&#10022;[代] 表示肯定、否定，数量、次数上很少。&#10;&emsp;&#10022;[代] 表示疑问，询问数量、重量、时间等多少、多久。",
    "刹": "&#9752;刹(chà):[名] 梵语刹多罗(kṣetra)的音译，指佛塔的柱形尖顶，故又称'佛柱'。代指寺庙佛塔。。",
    "占": "&#9752;占(zhàn):&#10;&emsp;&#10022;[动] 口头吟作；口授。&#10;&emsp;&#10022;[动] 占据；拥有。",
    "却": "&#9752;却(què):&#10;&emsp;&#10022;[副] (表示强调语气)才。&#10;&emsp;&#10022;[副] 还；再；恰；正。&#10;&emsp;&#10022;[连] 但是、可是、然而。",
    "卿": "&#9752;卿(qīng):&#10;&emsp;&#10022;[名] 古代高级官名。&#10;&emsp;&#10022;[名] 古代对人的敬称。",
    "厢": "&#9752;厢(xiāng):&#10;&emsp;&#10022;[名] 边；旁；方面。&#10;&emsp;&#10022;[名] 正房前面两侧的房屋。",
    "厮": "&#9752;厮(sī):&#10;&emsp;&#10022;[名] 古代干粗杂活的男奴隶、仆役。&#10;&emsp;&#10022;[形] 相互；彼此。",
    "否": "&#9752;否(fǒu):&#10;&emsp;&#10022;[副] 用在疑问句末，构成是非问句。&#10;&emsp;&#10022;[副] 不然；不是；不这样。",
    "哉": "&#9752;哉(zāi):[助] (表示感叹、肯定)相当于'啊'。",
    "垣": "&#9752;垣(yuán):[名] 墙；矮墙。",
    "壑": "&#9752;壑(hè):[名] 深谷、山谷。",
    "姊": "&#9752;姊(zǐ):[名] 姐姐。泛指同辈亲戚中较自己年长的女子。",
    "婿": "&#9752;婿(xù):[名] 女儿的丈夫。",
    "嫡": "&#9752;嫡(dí):[名] 奴隶社会、封建社会中的正妻。",
    "宁": "&#9752;宁(nìng):[动] 情愿；纵使。&#10;&#9752;宁(níng):&#10;&emsp;&#10022;[形] 平定；安静、平静。&#10;&emsp;&#10022;[名] 姓。",
    "宝": "&#9752;宝(bǎo):&#10;&emsp;&#10022;[名] 贵重的东西；珍宝。&#10;&emsp;&#10022;[名] 皇帝的印信、符玺、印章。&#10;&emsp;&emsp;&#10020;上古天子、诸侯均以圭璧制印，故称'宝'。唐以后只有帝、后之印可称'宝'。",
    "宦": "&#9752;宦(huàn):&#10;&emsp;&#10022;[形] 当官的、做官的。&#10;&emsp;&#10022;[名] 官吏。",
    "尧": "&#9752;尧(yáo):[名] 传说中的上古帝王。",
    "嵇": "&#9752;嵇(jī):[名] 姓。",
    "差": "&#9752;差(chāi):[动] 指派；派遣。&#10;&#9752;差(chà):[形] 低；次；不好 。",
    "幡": "&#9752;幡(fān):[名] 旗子。",
    "底": "&#9752;底(dǐ):&#10;&emsp;&#10022;[名] 器物的最下边部分。&#10;&emsp;&#10022;[名] 根基、基础；内情、内幕。&#10;&#9752;底(de):[助] 用在名词或代名词后面，表示所有的。",
    "度": "&#9752;度(duó):&#10;&emsp;&#10022;[动] 猜测、推测；估计。&#10;&emsp;&#10022;[名] 外表、仪态。",
    "怯": "&#9752;怯(qiè):[形] 力量薄弱；体质虚弱。",
    "恃": "&#9752;恃(shì):[动] 依赖、依靠。",
    "恤": "&#9752;恤(xù):&#10;&emsp;&#10022;[动] 怜悯、同情。&#10;&emsp;&#10022;[动] 救济、救助。",
    "悌": "&#9752;悌(tì):[动] 敬爱兄长。",
    "惟": "&#9752;惟(wéi):[副] 单；只有、只是。",
    "拂": "&#9752;拂(fú):&#10;&emsp;&#10022;[动] 违背、不顺从。&#10;&emsp;&#10022;[动] 掸除、拭。",
    "攸": "&#9752;攸(yōu):[形] 水流动的样子。",
    "效": "&#9752;效(xiào):&#10;&emsp;&#10022;[动] 摹仿、仿照。&#10;&emsp;&#10022;[名] 效果、成效。",
    "教": "&#9752;教(jiào):&#10;&emsp;&#10022;[名] 宗教的简称。&#10;&emsp;&#10022;[动] 使；令；让。&#10;&emsp;&#10022;[名] 训诲；培育。&#10;&#9752;教(jiāo): 传授；指导；教育。",
    "敝": "&#9752;敝(bì):&#10;&emsp;&#10022;[形] 破旧的、陈旧的。&#10;&emsp;&#10022;[形] 对自己相关事物的自谦。",
    "敷": "&#9752;敷(fū):[动] 散布、传布，陈述。",
    "斋": "&#9752;斋(zhāi):[名] (多指书房、学舍等)屋舍。",
    "昉": "&#9752;昉(fǎng):[名] 早晨。",
    "朝": "&#9752;朝(cháo):&#10;&emsp;&#10022;[名] 姓。&#10;&emsp;&#10022;[名] 指一姓帝王世代相继的统治时代；亦指某一个皇帝统治的时期。&#10;&emsp;&#10022;[动] 向着、对着。",
    "札": "&#9752;札(zhá):[名] 古代用来写字的小木片。引申为书信、公文。",
    "桀": "&#9752;桀(jié):[名] 中国夏朝末代君主，相传是暴君。",
    "桓": "&#9752;桓(huán):[名] 姓。",
    "桧": "&#9752;桧(guì):[名] 树名，即圆柏。&#10;&#9752;桧(huì):[名] 用于人名。",
    "楣": "&#9752;楣(méi):[名] 房屋的横梁。",
    "止": "&#9752;止(zhǐ):&#10;&emsp;&#10022;[副] 仅仅；只、只有。&#10;&emsp;&#10022;[动] 停止、中止；停留、逗留。",
    "殍": "&#9752;殍(piǎo):[名] 尸体。",
    "殷": "&#9752;殷(yīn):&#10;&emsp;&#10022;[形] 富裕、富足。&#10;&emsp;&#10022;[形] 热情；恳切。&#10;&emsp;&#10022;[名] 古朝代名，商代的后期。",
    "汞": "&#9752;汞(gǒng):[名] 水银。",
    "沽": "&#9752;沽(gū):&#10;&emsp;&#10022;[动] 出售、卖掉。&#10;&emsp;&#10022;[动] 购买、买来(酒)。",
    "济": "&#9752;济(jì):[动] 增加、增进。",
    "淖": "&#9752;淖(nào):[名] 沼泽。",
    "漩": "&#9752;漩(xuán):[形] 水流旋转的样子。",
    "潘": "&#9752;潘(pān):[名] 姓。",
    "濮": "&#9752;濮(pú):[名] 古水名。",
    "熹": "&#9752;熹(xī):[形] 光明的；炽热的。",
    "琏": "&#9752;琏(liǎn):[名] 古代宗庙中盛黍稷的器皿。",
    "甄": "&#9752;甄(zhēn):[名] 姓。",
    "甚": "&#9752;甚(shèn):&#10;&emsp;&#10022;[副] 很、非常；极。&#10;&emsp;&#10022;[连] 表示更进一层、递进的意思。&#10;&#9752;甚(shén):[代] 同'什'，(表示疑问)什么；怎么。",
    "疏": "&#9752;疏(shū):&#10;&emsp;&#10022;[动] 注释、解释。&#10;&emsp;&#10022;[动] (关系上的)远离、不亲近。",
    "皋": "&#9752;皋(gāo):[名] 水边的高地。",
    "相": "&#9752;相(xiāng):&#10;&emsp;&#10022;[副] 交互；彼此。&#10;&emsp;&#10022;[副] 连续；不断；先后。&#10;&emsp;&#10022;[动] 观看；查看。&#10;&#9752;相(xiàng):&#10;&emsp;&#10022;[名] 容貌；外貌；模样。&#10;&emsp;&#10022;[动] 察看；判断。&#10;&emsp;&#10022;[名] 古代辅佐帝王的大臣。后专指宰相。",
    "省": "&#9752;省(xǐng):&#10;&emsp;&#10022;[动] 对尊长的探望、问候。&#10;&emsp;&#10022;[动]明白、醒悟。&#10;&#9752;省(shěng):&#10;&emsp;&#10022;[动] 减少、节约；精简、简略。&#10;&emsp;&#10022;[名] 行政区划单位。",
    "矜": "&#9752;矜(jīn):[形] 庄重、端庄；严谨、慎重。",
    "矣": "&#9752;矣(yǐ):[助] 用于句末，表示完成时态；表示肯定、感叹的语气。",
    "石": "&#9752;石(shí):[名] 自然界的矿物质硬块儿。&#10;&#9752;石(dàn):[量] 容量、重量单位。",
    "祗": "&#9752;祗(zhī):[动] 尊敬、恭敬。",
    "祚": "&#9752;祚(zuò):[名] 福运、福分。",
    "禀": "&#9752;禀(bǐng):&#10;&emsp;&#10022;[动] 上天赋予、给予。&#10;&emsp;&#10022;[动] 下级对上级陈述报告、回复消息。",
    "禄": "&#9752;禄(lù):[名] 古代官吏的薪水。",
    "禹": "&#9752;禹(yǔ):[名] 传说中国夏代的第一个君主。",
    "秉": "&#9752;秉(bǐng):[动] 执掌、掌握。",
    "竟": "&#9752;竟(jìng):&#10;&emsp;&#10022;[副] 到底；终于、最终。&#10;&emsp;&#10022;[副] 居然；反倒是。&#10;&emsp;&#10022;[动] 结束、完结。&#10;&emsp;&#10022;[副] 径直、一直、直接。",
    "笞": "&#9752;笞(chī):[动] 用鞭、杖、竹板抽打。",
    "筹": "&#9752;筹(chóu):&#10;&emsp;&#10022;[名] 计数的用具，多用竹子制成。&#10;&emsp;&#10022;[动] 计划、策划。",
    "系": "&#9752;系(xì):&#10;&emsp;&#10022;[动] 关联，联结。&#10;&emsp;&#10022;[动] 是。&#10;&#9752;系(jì): 接上；拴；连接上。",
    "素": "&#9752;素(sù):&#10;&emsp;&#10022;[形] 往常、旧时、平日。&#10;&emsp;&#10022;[形] 白色、洁白。",
    "累": "&#9752;累(lěi):[动] 连及、连带；妨碍；牵连。",
    "纣": "&#9752;纣(zhòu):[名] 中国商朝最后一个君主，历史上有名的暴君。",
    "纲": "&#9752;纲(gāng):&#10;&emsp;&#10022;[名] 规范；纪律；法理。&#10;&emsp;&#10022;[名] 事物的关键部分；内容的要领、要点、重点。",
    "绅": "&#9752;绅(shēn):[名] 古代士大夫束腰的带子。代指有势力、有地位的人。",
    "绛": "&#9752;绛(jiàng):[形] 赤色，火红。",
    "缎": "&#9752;缎(duàn):[名] 中国特产的质地厚密、一面光滑的丝织品。",
    "罕": "&#9752;罕(hǎn):[形] 稀少的；少见的。",
    "羲": "&#9752;羲(xī):[名] 用于人名。",
    "翰": "&#9752;翰(hàn):[名] 本义是羽毛，因古代以羽毛为笔，引申为墨迹、书法、文章。",
    "肆": "&#9752;肆(sì):[名] 商店、店铺。",
    "膏": "&#9752;膏(gāo):[名] 油脂、脂肪；肥肉。",
    "舍": "&#9752;舍(shè):&#10;&emsp;&#10022;[量] 古代行军一宿或三十里为一舍。&#10;&emsp;&#10022;[代] 谦辞，多指亲属中比自己年纪小或辈分低的。&#10;&#9752;舍(shě):[动] 放弃、抛弃；不顾。",
    "舜": "&#9752;舜(shùn):[名] 传说中父系氏族社会部落联盟领袖。",
    "蒙": "&#9752;蒙(méng):&#10;&emsp;&#10022;[动] (表示敬意、尊敬)承受、受到。&#10;&emsp;&#10022;[形] 幼稚、不懂事；无知、愚昧。",
    "薄": "&#9752;薄(bó):&#10;&emsp;&#10022;[动] 冷淡、冷落。&#10;&emsp;&#10022;[形] 微小；少。&#10;&emsp;&#10022;[形] 指人心、世道、纲纪等轻薄；不庄重。&#10;&#9752;薄(báo):[形] 养分少、不肥沃的土地。",
    "虏": "&#9752;虏(lǔ):[动] 俘获、抢夺、掠夺。",
    "虞": "&#9752;虞(yú):[名] 姓。",
    "蚩": "&#9752;蚩(chī):[名] 姓。",
    "蠹": "&#9752;蠹(dù):&#10;&emsp;&#10022;[名] 害虫。&#10;&emsp;&#10022;[动] 蛀蚀、侵蚀。",
    "衔": "&#9752;衔(xián):&#10;&emsp;&#10022;[动] 用嘴含、叼。&#10;&emsp;&#10022;[名] 职务和级别的名号。",
    "衙": "&#9752;衙(yá):[名] 古代官署。",
    "袖": "&#9752;袖(xiù):&#10;&emsp;&#10022;[动] 放、藏在袖子里。&#10;&emsp;&#10022;[名] 衣服套在胳膊上的部分。",
    "袭": "&#9752;袭(xí):&#10;&emsp;&#10022;[动] 继承；照旧沿用。&#10;&emsp;&#10022;[动] 触及；熏染。",
    "讳": "&#9752;讳(huì):&#10;&emsp;&#10022;[动] 忌惮；有顾忌而不愿说、看、做等。&#10;&emsp;&#10022;[名] 忌惮、顾忌的事。",
    "诸": "&#9752;诸(zhū):[代] 指人、事、物，相当于'之'、'其'。",
    "谬": "&#9752;谬(miù):&#10;&emsp;&#10022;[名] 错误，不合情理。&#10;&emsp;&#10022;[形] 错误的，不适当的。",
    "贽": "&#9752;贽(zhì):&#10;&emsp;&#10022;[名] 古代初次拜见尊长所送的礼物。&#10;&emsp;&#10022;[动] 献礼；赠送礼物。",
    "贾": "&#9752;贾(gǔ):[名] 做买卖的人；商人。&#10;&#9752;贾(jià):[名] 同'价'，价格、价钱。&#10;&#9752;贾(jiǎ):[名] 姓。",
    "赋": "&#9752;赋(fù):&#10;&emsp;&#10022;[名] 汉魏六朝盛行的古代文体，融合韵文散文，既写景叙事，又抒情说理。&#10;&emsp;&#10022;[名] 资质、才能。&#10;&emsp;&#10022;[动] 给予；授予。",
    "赞": "&#9752;赞(zàn):[动] &#10;&emsp;&#10022;夸奖、称扬、称颂。&#10;&emsp;&#10022;[名] 一种抒情文体，用于颂扬人物。",
    "载": "&#9752;载(zài):[动] 承担、担任、承受。&#10;&#9752;载(zǎi):&#10;&emsp;&#10022;[名] 年；岁。&#10;&emsp;&#10022;[动] 记录；刊登。",
    "逮": "&#9752;逮(dài):[动] 到了、等到；及至。",
    "遂": "&#9752;遂(suì):&#10;&emsp;&#10022;[副] 于是，就。&#10;&emsp;&#10022;[动] 称心、顺心；满足。",
    "邛": "&#9752;邛(qióng):[名] 故地名。",
    "那": "&#9752;那(nà):[代] 指较远的时间、地点或人、事、物。&#10;&#9752;那(nǎ):[代] 古同'哪'，表示疑问。",
    "郗": "&#9752;郗(xī):[名] 姓。",
    "鄄": "&#9752;鄄(juàn):[名] 地名。",
    "释": "&#9752;释(shì):&#10;&emsp;&#10022;[名] 中国佛教用作释迦牟尼的简称。东晋以后，佛教出家人自称释子，对外人而言称释氏。&#10;&emsp;&#10022;[动] 消失；消除；停止、结束。",
    "重": "&#9752;重(zhòng):&#10;&emsp;&#10022;[名] 姓。&#10;&emsp;&#10022;[形] 重量大；分量大。&#10;&emsp;&#10022;[名] 大重量的东西。",
    "鉴": "&#9752;鉴(jiàn):&#10;&emsp;&#10022;[名] 镜子。&#10;&emsp;&#10022;[动] 观察、审察。",
    "钗": "&#9752;钗(chāi):[名] 古代妇女的一种首饰，形似叉，用金、玉、铜等制作。借指妇女。",
    "间": "&#9752;间(jiān):&#10;&emsp;&#10022;[名] (一定范围的时间、方位、事物等)内；中。&#10;&emsp;&#10022;[量] 房屋数量单位。&#10;&#9752;间(jiàn):[动] 夹杂；参杂。",
    "阮": "&#9752;阮(ruǎn):[名] 姓。",
    "颐": "&#9752;颐(yí):[动] 养育、抚养。",
    "颓": "&#9752;颓(tuí):&#10;&emsp;&#10022;[形] 恶劣的；不好的。&#10;&emsp;&#10022;[动] 倒塌；崩坏。",
    "饴": "&#9752;饴(yí):[形] 甜的、甜味的；甜美的。",
    "馀": "&#9752;馀(yú):&#10;&emsp;&#10022;[形] 同'余'，(表示整数后的零数)多的、超过的。&#10;&emsp;&#10022;[形] 同'余'，其余的、以外的。",
    "馆": "&#9752;馆(guǎn):[名] 官署、学塾、书房、商坊、展览处所等地方。",
    "不谷": "&#9752;不谷(bù gǔ):[名] 不善。古代王侯自称的谦词。",
    "丫鬟": "&#9752;丫鬟(yā huan):[名] 婢(bì)女。旧社会里被剥削阶级买卖后奴役、驱使的女子。",
    "举业": "&#9752;举业(jǔ yè):[名] 科举时代指专为应试的诗文、学业、课业、文字。也指八股文。",
    "乃是": "&#9752;乃是(nǎi shì):[动] 是、就是。",
    "乖觉": "&#9752;乖觉(guāi jué):[形] 机灵、聪明。",
    "二更": "&#9752;二更(èr gēng):[名] 晚上九点到十一点。",
    "仔细": "&#9752;仔细(zǐ xì):[形] 小心、当心、留神。",
    "信步": "&#9752;信步(xìn bù):[动] 漫无目标的随意走走。",
    "却说": "&#9752;却说(què shuō):[助] 说书人或章回小说中，在新段落常用的发端词。",
    "厢房": "&#9752;厢房(xiāng fáng):[名] 正房前面两侧的房屋。",
    "同知": "&#9752;同知(tóng zhī):[名] 明清官名。为知府的副职，正五品。",
    "唐突": "&#9752;唐突(táng tū):[动] 冒犯、冒昧；失礼。",
    "大夫": "&#9752;大夫(dài fu):[名] 医生。&#10;&#9752;大夫(dà fū):[名] 古代官名。",
    "女史": "&#9752;女史(nǚ shǐ):[名] 古代女官名。掌管有关王后礼仪等事，或掌管书写文件等事。",
    "嫡妻": "&#9752;嫡妻(dí qī):[名] 奴隶社会、封建社会中的正妻。",
    "宦囊": "&#9752;宦囊(huàn náng):[名] 做官时得到的俸禄、积蓄。",
    "峥嵘": "&#9752;峥嵘(zhēng róng):[形] 高大、雄伟的样子。",
    "庶出": "&#9752;庶出(shù chū):[名] 旧时指妾所生的子女。",
    "弹劾": "&#9752;弹劾(tán hé):[动] 对违法失职的政府官员提出控诉、指责、控告。",
    "总裁": "&#9752;总裁(zǒng cái):[名] 官职名。元、明、清官方修史的主管官。",
    "投契": "&#9752;投契(tóu qì):[动] 兴趣相投、志趣相合。",
    "撺掇": "&#9752;撺掇(cuān duo):[动] 挑唆、怂恿。",
    "洇润": "&#9752;洇润(yīn rùn):[形] 滋润、温润有光泽。",
    "盘桓": "&#9752;盘桓(pán huán):[动] 徘徊、逗留、停留。",
    "看看": "&#9752;看看(kān kān): [副] 渐渐；眼看着；转瞬间。亦作‘堪堪’。",
    "端的": "&#9752;端的(duān dì):[名] 事情的缘由、真相、实情。",
    "累官": "&#9752;累官(lěi guān):[动] 积功升官。",
    "胡羼": "&#9752;胡羼(hú chàn):[动] 乱说、乱讲；胡闹；鬼混。",
    "设若": "&#9752;设若(shè ruò):[连] 如果、假如。",
    "邑号": "&#9752;邑号(yì hào):[名] 古代六品以上官吏之妻妾的封号。",
    "金陵": "&#9752;金陵(jīn líng):[名] 地名。",
    "钦差": "&#9752;钦差(qīn chāi):[名] 由皇帝亲自派遣，代表皇帝出外办理重大事件的官员。",
    "闾阎": "&#9752;闾阎(lǘ yán):[名] 原指古代里巷的门。后泛指村落、乡里。亦借指平民百姓。",
    "龙钟": "&#9752;龙钟(lóng zhōng):[形] 年老体衰、行动不便的样子。",
    "员外郎": "&#9752;员外郎(yuán wài láng):[名] 官名。本指正员以外的郎官。隋唐以后，各部均设有员外郎，位次郎中。",
    
    // new words
}
