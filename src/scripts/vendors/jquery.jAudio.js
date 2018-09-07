/*
    Plugin Name: jAudio
    Copyright (C) 2018 - Mohammad Esmaeilzadeh
    Author URL: http://www.bugless.ir/
    Author Email: bugless.ir@yahoo.com
    GitHub: https://github.com/buglessir
    A jQuery plugin for convert <A> tags to simple audio player
*/

$.fn.jAudio = function(){

    this.each(function(){

        var $this = $(this);
        var jAudioSrc = $this.attr('href');
        var jAudioTitle = $this.text();
        var jAudioPlayerId = 'jAudio-' + Math.floor( Math.random() * 999999 );
        var jAudioPlayerTag = '<audio class="jAudioPlayer" id="'+ jAudioPlayerId +'"></audio>';
        var jAudioPlayerSrcTag = '<source src="'+ jAudioSrc +'" type="audio/mp3">';

        $this.css('display', 'none');

        $this.after(jAudioPlayerTag);

        var jAudioPlayer = $('#' + jAudioPlayerId);

        jAudioPlayer.append(jAudioPlayerSrcTag);

        var jAudioControls = '<a href="javascript:void(0)" title="'+ jAudioTitle +'" id="jAudioBtn-'+ jAudioPlayerId +'" data-target="'+ jAudioPlayerId +'" class="jAudioBtnPlay"></a>';

        jAudioPlayer.after(jAudioControls);

        var jAudioBtn = $('#jAudioBtn-' + jAudioPlayerId);

        jAudioBtn.click(function(){
            if( $(this).hasClass('jAudioBtnPlay') ){
                document.getElementById($(this).data('target')).play();
                $(this).removeClass('jAudioBtnPlay');
                $(this).addClass('jAudioBtnPause');
            }
            else{
                document.getElementById($(this).data('target')).pause();
                $(this).removeClass('jAudioBtnPause');
                $(this).addClass('jAudioBtnPlay');
            }
        });

    });

};
