# Generated by Django 2.0.7 on 2019-05-05 21:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('dashboard', '0002_auto_20190505_0201'),
    ]

    operations = [
        migrations.AlterField(
            model_name='loan',
            name='account_number',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='loan',
            name='repayment_status',
            field=models.IntegerField(blank=True, default=0, null=True),
        ),
    ]
