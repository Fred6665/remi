# Generated by Django 2.0.7 on 2018-07-28 17:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0002_auto_20180728_1800'),
    ]

    operations = [
        migrations.AlterField(
            model_name='slides',
            name='name',
            field=models.CharField(default='slides1', help_text="Значение должно быть 'slides1'", max_length=7, verbose_name='Для разработчиков(не трогать)'),
        ),
    ]
