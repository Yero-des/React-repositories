from rest_framework import serializers
from .models import *

class ResourceSerializer(serializers.ModelSerializer):
  class Meta:
    model = Resource
    fields = '__all__'

class TypeSerializer(serializers.ModelSerializer):
  class Meta:
    model = Type
    fields = '__all__'