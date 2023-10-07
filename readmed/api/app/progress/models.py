from django.db import models

class Type(models.Model):

  id = models.AutoField(primary_key=True)
  name = models.CharField(max_length=250, unique=True)
  description = models.CharField(max_length=250, blank=True)
  image = models.ImageField(upload_to='type/', null=True)

  def __str__(self):
    return self.name
  
class Resource(models.Model):

  id = models.AutoField(primary_key=True)
  name = models.CharField(max_length=250) 
  description = models.CharField(max_length=250, blank=True)
  image = models.ImageField(upload_to='resource/', null=True)
  type = models.ForeignKey(Type, on_delete=models.CASCADE, default='language', to_field='name') 
  progress = models.IntegerField(default=0)
  progress_max = models.IntegerField()

  def __str__(self):
    return self.name