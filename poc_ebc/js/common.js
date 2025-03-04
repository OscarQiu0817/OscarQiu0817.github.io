// 語言文字管理
const content = {
	zh: {
		title: '台新銀行',
		button: '加入手機通訊錄',
		name: '梁富惠',
		title1: '資深副總經理',
		title2: '行政服務處  處長',
		address: {
			title: '地址',
			value: '台北市內湖區舊宗路二段207號8樓'
		},
		tel: {
			title: '手機',
			value: '(02) 8798-9999  #8599'
		},
		fax: {
			title: '電話',
			value: '(02) 8798-9800'
		},
		guid: {
			title: '統編',
			value: '86519539',
		},
		e: {
			title: 'Email',
			value: 'janiceliang@taishbank.com.tw',
		},
	},
	en: {
		title: 'Taishin International Bank',
		button: 'Add to Contacts',
		name: 'Janice Liang',
		title1: 'Senior Vice President',
		title2: 'Head Of Administration Division',
		address: {
			title: '',
			value: '8F.,No.207,sec.2,Jiuzong Rd.,Neihu Dist.,Taipei City 114, Taiwan (R.O.C)'
		},
		tel: {
			title: 'Tel',
			value: '+886-2-8798-9999  Ext.8599'
		},
		fax: {
			title: 'Fax',
			value: '+886-2-8798-9800'
		},
		guid: {
			title: '統編',
			value: '86519539',
		},
		e: {
			title: 'Email',
			value: 'janiceliang@taishbank.com.tw',
		},
	}
};
function setLanguage(lang) {
    document.getElementById('title').textContent = content[lang].title;
    //document.getElementById('button').textContent = content[lang].button;
	document.getElementById('name').textContent = content[lang].name;
    document.getElementById('title1').textContent = content[lang].title1;
    document.getElementById('title2').textContent = content[lang].title2;

	document.getElementById('address-title').textContent = content[lang].address.title;
	document.getElementById('address').textContent = content[lang].address.value;
	document.getElementById('tel-title').textContent = content[lang].tel.title;
	document.getElementById('tel').textContent = content[lang].tel.value;
	document.getElementById('fax-title').textContent = content[lang].fax.title;
	document.getElementById('fax').textContent = content[lang].fax.value;
	document.getElementById('guid-title').textContent = content[lang].guid.title;
	document.getElementById('guid').textContent = content[lang].guid.value;
	document.getElementById('e-title').textContent = content[lang].e.title;
	document.getElementById('e').textContent = content[lang].e.value;
	
	displayInfo();
}

$(function() {

	// 切換語言
	const buttons = document.querySelectorAll('.tabNav button');
    const switcher = document.querySelector('.switcher');
    buttons.forEach((btn, index) => {
        btn.addEventListener('click', function() {
            buttons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            switcher.style.left = this.offsetLeft + 'px';

            const lang = index === 0 ? 'zh' : 'en';
            setLanguage(lang);

            if (lang === 'en') {
                document.querySelector('body').classList.add('en');
            } else {
                document.querySelector('body').classList.remove('en');
            }
        });
    });
    // 初始化為中文
    setLanguage('zh');
	
	// tab
	$tabItem = $('.tabNav button');
    $switcher = $('.tabNav .switcher');
    $tabItem.on('click', function() {
    	index = $tabItem.index(this);

        $tabItem.removeClass('active');
        $(this).addClass('active');

        leftPos = $(this).position().left;
        $switcher.stop().animate({ left: leftPos + 'px' }, 100);

    });

	
	// 點擊切換到 QR code
    $('#btn-qrcode').click(function() {
        // 隱藏當前區塊並切換顯示的區塊
        $('.show').removeClass('show');
        $('#qrcode1').parent().addClass('show');
        //$('#qrcode').show();
        $('#btn-photo').show();
    });

    // 點擊切換到 頭像
    $('#btn-photo').click(function() {
        // 隱藏當前區塊並切換顯示的區塊
        $('.show').removeClass('show');
        $('#photo').parent().addClass('show');
        //$('#photo').show();
        $('#btn-qrcode').show();
    });


	$dialog = $('.dialogBlock');
	$dialogBtn = $('.dialogBtn');
	$closeBtn = $('.closeBtn');
	$dialogBtn.on('click', function() {
		$dialog.addClass('showDialog');
	});
	$closeBtn.on('click', function() {
		$dialog.removeClass('showDialog');
	});

});


