from django.db import models
from django.db.models.signals import pre_delete
from django.dispatch.dispatcher import receiver
from django.utils.safestring import mark_safe

# Create your models here.
class Product(models.Model):

	photo_product= models.ImageField(upload_to = 'images/',help_text="302x200px", verbose_name = 'загрузка фото')
	photo_product_slide_1 = models.ImageField(upload_to = 'images/',help_text="604x400px", verbose_name = 'загрузка фото слайда 1')
	photo_product_slide_2 = models.ImageField(upload_to = 'images/',help_text="604x400px", verbose_name = 'загрузка фото слайда 2', blank = True)

	conteiner_photo_slides_mayki = [photo_product,photo_product_slide_1,photo_product_slide_2]

	title_name = models.CharField(max_length = 100, verbose_name = 'Название')
	description_product= models.TextField(verbose_name = 'Описание товара')
	cloth_characteristic = models.TextField(verbose_name = 'ткань')
	color_characteristic = models.TextField(verbose_name = 'цвета')
	size_characteristic = models.TextField(verbose_name = 'размеры')
	Price_product= models.IntegerField(verbose_name = 'Цена')

	def __str__(self):
		return self.title_name + " №" + str(self.id)


class Slides(models.Model):
	slide_1 = models.ImageField(upload_to = 'slides/',help_text = '920x230px', verbose_name = "Слайд 1")
	slide_2 = models.ImageField(upload_to = 'slides/',help_text = '920x230px', verbose_name = "Слайд 2")
	slide_3 = models.ImageField(upload_to = 'slides/',help_text = '920x230px', verbose_name = "Слайд 3")

	def __str__(self):
		return "Слайды(id): " + str(self.id)



@receiver(pre_delete, sender=Product)
def myfield_delete(sender, instance, **kwargs):
    if instance.photo_product.name:
        instance.photo_product.delete(False)

@receiver(pre_delete, sender=Slides)
def mayfield_delete(sender,instance, **kwarge):
    if instance.slide_1.name:
        instance.slide_1.delete(False)
    if instance.slide_2.name:
        instance.slide_2.delete(False)  
    if instance.slide_3.name:
        instance.slide_3.delete(False)              

