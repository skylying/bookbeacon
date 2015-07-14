/** @jsx React.DOM */
var React = require('react');
var AddNewComment = require('./widgets/addNewComment');

var Review = React.createClass({
    render: function() {
	    return (
		    <div className="row">
			    <h1>讀後賞析</h1>
			    <div className="review-header">
					<img className="avatar pull-left img-circle" src="http://placehold.it/40x40"/>
				    <span className="username pull-left">讀者 A 君</span>
				    <div className="like-count-wrap pull-right">
					    <span className="glyphicon glyphicon-heart icon"></span>
					    <span id="like-count">35</span>
				    </div>
			    </div>
			    <div className="clearfix"></div>
			    <div>
				    <p className="review-content">
					    這部小說最大的特色，正是文學結構主義強調的「內涵語碼」（Connotative Code）。主角匡復一直為無法參透「人生的意義」而痛苦，畢竟對求學階段的人來說，人生並不是只有讀書考試，還有許多其他的層面，他卻不知道如何應付。即使拿了臺大電機系第一名，他依然反復想著，為什麼而活？拿第一名不是目的，悽慘的生活也非他所喜，他到底為什麼而活？或許是幸福的人生？但什麼是幸福？如何才能獲得幸福？於是他參加讀書會，廣泛閱讀哲學和文學作品，希望藉以解決長期以來盤據心中的困惑，只是不知為什麼，這些內容無法進到他的內心深處，觸動他的靈魂，對釐清人生的意義，似乎無濟於事。
					    <br/>
					    <br/>
					    跟匡復心靈引起共鳴的夏曉軒，同樣找不到人生的意義，當她希望藉由基督教尋求人生的出口，在基督教信仰和梵谷自戕的遭遇之間取得調和，遺憾的是，當時未能得到匡復的重視與支持，結果使這段一生只能擁有一次的戀情為之破局。來到「綺色佳」的康乃爾大學，匡復想要明白，為什麼曉軒會去相信基督教？為了再度瞭解她的內心，他認為必須深入瞭解她的信仰，才有可能進入她的心靈。是以非基督徒的他進入查經班，認真研究聖經的道理，幾乎比基督徒還要了解基督教；但身為科學人，他始終還是抱持懷疑的態度，認為宗教信仰只是心靈感受，然後藉著理性思辨，試圖說服自己這個信仰值得投入。在這過程中，慢慢地，他似乎發現，上帝不只是哲學上的概念，也不是美好道德的代名詞，祂是有感覺的，如果祂在人們心中所占的分量不夠，祂會不高興，然後想辦法讓人重視祂。後來，夏曉軒之死，促使他成為基督徒，讀到哥林多前書十三章四至八節：「愛是恆久忍耐，又有恩慈；愛是不嫉妒；愛是不自誇，不張狂，不作害羞的事，不求自己的益處，不輕易發怒，不計算人的惡，不喜歡不義，只喜歡真理：凡事包容，凡事盼望，凡事忍耐。愛是永不止息。」他這才豁然開朗，頓悟了，瞭解了困擾他多年的原生家庭的癥結所在，領悟了人和人之間的愛之本質，以及如何解決人世間各式各樣的愛之困惑。
				    </p>
			    </div>
			    <div className="review-header">
				    <img className="avatar pull-left img-circle" src="http://placehold.it/40x40"/>
				    <span className="username pull-left">讀者 B 君</span>
				    <div className="like-count-wrap pull-right">
					    <span className="glyphicon glyphicon-heart icon"></span>
					    <span id="like-count">10</span>
				    </div>
			    </div>
			    <div className="clearfix"></div>
			    <div>
				    <p className="review-content">
					    作者於自序提到，能不能讓這本小說成為臺灣人思考自己在忙些什麼的小小媒介之一？有沒有可能讓更多人思考，到底活著是為了什麼？什麼是人心裏的渴慕？活著就只是為了能夠活著？或是為了其他目的？是為了出人頭地？為了金錢、權力、成功或成就？有沒有比金錢、權力、成功或成就更重要的部分？如何藉由生命的探索或是偶遇，在撲朔迷離的人生旅程中，領悟人生意義？綜觀《中年維特之煩惱》的主題呈現，其政治方面的議論，著墨不多，寫作重點放在心靈探索與愛的追尋，足以帶給讀者深刻的啟示，或許不免有過於「用力」之處，然其於思想探索之苦心與成果，有目共睹。經由小說的閱讀，分享作家的人生哲學，真是一種極其美妙的經驗，《中年維特之煩惱》即為一例。
					    <br/>
					    <br/>
					    特別是作者為理工背景，卻不只擅長說故事，文筆之佳亦令人驚豔，大大提高了此書的可讀性。茲舉例一二，試看眾人返臺同遊翡翠水庫，作者如此描述：「水面非常的平靜，像是一面極大的鏡子，完美地嵌在群山之間，整個翡翠山區的山脈完整地倒映在水裏，形成美妙的對稱。山是又濃又深的綠，水是稍為淺一些的墨綠，而天空是淺藍色，因為在山脈之間，像是開闢在天上的大道，悠美而寬敞，偶而鋪上幾片柔和的白雲，這些又全部都倒映在水裏，真的是美極了。」再如勾繪康乃爾大學凱悠佳湖：「溪水中倒映著泛紅的楓樹，原來景色已經轉為秋天，匡復稍為抬頭看著對岸，岸邊整排的楓樹已經變為橙紅，映著水中漂亮的倒影，像是彼此對看的情侶，而橙紅的楓葉似乎襯托出他們既害羞又真摯的愛情。」彷如優美的散文，這樣的寫景寓情的功力，在在令人刮目相看。
				    </p>
			    </div>
			    <AddNewComment />
		    </div>
	    )
    }
});

module.exports = Review;