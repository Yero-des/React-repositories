from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework import status
from .models import *
from .serializers import *


class ResourceViewSet(viewsets.ModelViewSet):
  queryset = Resource.objects.all()
  serializer_class = ResourceSerializer

  def update_progress(self, request, pk=None):
    if request.method == 'PUT':
      try:
        resource = self.get_object()  
        new_progress = request.data.get('progress') 
        resource.progress = new_progress  
        resource.save()  

        serializer = ResourceSerializer(resource)
        return Response(serializer.data)

      except Resource.DoesNotExist:
        return Response({'detail': 'Recurso no encontrado'}, status=status.HTTP_404_NOT_FOUND)


class TypeViewSet(viewsets.ModelViewSet):
  queryset = Type.objects.all()
  serializer_class = TypeSerializer
