// Smooth Scrool Sample

$(function(){

   $('a[href^="#"]').click(function() {

      // �����ݒ�F�ړ�����(ms)�Ɠ��o���ʒu
      var speed = 500;
      var offset = -0;

      // �A���J�[���擾
      var anchor = $(this).attr("href");

      // �^�[�Q�b�g�̈ʒu���擾
      var target = $(anchor == "#" || anchor == "" ? 'html' : anchor);
      var position = target.offset().top + offset;

      // �X�N���[���i�A�j���[�V�����j
      $('body,html').animate({scrollTop:position}, speed, 'swing');

      return false;

   });

});