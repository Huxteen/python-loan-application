# Generated by Django 2.0.7 on 2019-05-06 09:23

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('dashboard', '0006_auto_20190506_0117'),
    ]

    operations = [
        migrations.RenameField(
            model_name='repayment',
            old_name='id_loan',
            new_name='loan_id',
        ),
    ]
