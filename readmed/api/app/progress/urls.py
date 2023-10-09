from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import *

router = DefaultRouter()
router.register(r'resources', ResourceViewSet)
router.register(r'types', TypeViewSet)

urlpatterns = [
  path('', include(router.urls)),
  path('resources/<int:pk>/update-progress/', ResourceViewSet.as_view({'put': 'update_progress'}), name='update-progress'),
]