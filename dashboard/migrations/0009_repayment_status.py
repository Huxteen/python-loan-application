# Generated by Django 2.0.7 on 2019-05-06 11:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('dashboard', '0008_repayment_user_id'),
    ]

    operations = [
        migrations.AddField(
            model_name='repayment',
            name='status',
            field=models.BooleanField(default=False),
        ),
    ]