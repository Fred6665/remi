# Generated by Django 2.0.7 on 2018-07-28 15:00

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='slides',
            old_name='title',
            new_name='name',
        ),
    ]
