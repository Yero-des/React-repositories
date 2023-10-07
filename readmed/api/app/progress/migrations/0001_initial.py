# Generated by Django 4.2.5 on 2023-09-30 14:19

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Type',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=250, unique=True)),
                ('description', models.CharField(blank=True, max_length=250)),
            ],
        ),
        migrations.CreateModel(
            name='Resource',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=250)),
                ('description', models.CharField(blank=True, max_length=250)),
                ('progress', models.IntegerField(default=0)),
                ('progress_max', models.IntegerField()),
                ('type', models.ForeignKey(default='language', on_delete=django.db.models.deletion.CASCADE, to='progress.type', to_field='name')),
            ],
        ),
    ]
