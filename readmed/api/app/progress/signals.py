from django.db.models.signals import post_migrate
from django.dispatch import receiver
from django.apps import apps
from .models import *

@receiver(post_migrate)
def load_initial_data(sender, **kwargs):
  if sender.name == 'progress':

    Model = apps.get_model('progress', 'Type')
    if not Model.objects.exists():
        
      initial_type_data = [
        {"name": "environment", "description": "This is the environment that will be used to run the application in production or movile",  "image": "type/environment.png"},
        {"name": "framework", "description": "This is the framework that will be used to create or run the application web or apiserver",  "image": "type/framework.jpg"},
        {"name": "database", "description": "This is a very important for data in the backend",  "image": "type/database.png"},
        {"name": "language", "description": "This is the base in everything that will be used",  "image": "type/language.png"}
      ]

      for data in initial_type_data:
        Type.objects.create(**data)

      language_type = Type.objects.get(name="language")
      framework_type = Type.objects.get(name="framework")
      environment_type = Type.objects.get(name="environment")
      database_type = Type.objects.get(name="database")

      initial_resource_data = [
        {"name": "php", "type": language_type, "progress_max": 400, "image": "resource/php.png"},
        {"name": "javascript", "type": language_type, "progress_max": 400, "image": "resource/javascript.png"},
        {"name": "swift", "type": language_type, "progress_max": 400, "image": "resource/swift.png"},
        {"name": "java", "type": language_type, "progress_max": 400, "image": "resource/java.png"},
        {"name": "python", "type": language_type, "progress_max": 400, "image": "resource/python.png"},
        {"name": "dart", "type": language_type, "progress_max": 400, "image": "resource/dart.png"},
        {"name": "c++", "type": language_type, "progress_max": 400,"image": "resource/c++.png"},
        {"name": "kotlin", "type": language_type, "progress_max": 400, "image": "resource/kotlin.png"},
        {"name": "laravel", "type": framework_type, "progress_max": 200, "image": "resource/laravel.png"},
        {"name": "react", "type": framework_type, "progress_max": 200, "image": "resource/react.png"},
        {"name": "node", "type": framework_type, "progress_max": 200, "image": "resource/node.png"},
        {"name": "django", "type": framework_type, "progress_max": 200, "image": "resource/django.png"},
        {"name": "springboot", "type": framework_type, "progress_max": 300, "image": "resource/springboot.png"},
        {"name": "flutter", "type": environment_type, "progress_max": 300, "image": "resource/flutter.png"},
        {"name": "code xe", "type": environment_type, "progress_max": 300, "image": "resource/xcode.png"},
        {"name": "android studio", "type": environment_type, "progress_max": 300, "image": "resource/android_studio.png"},
        {"name": "mySQL", "type": database_type, "progress_max": 400, "image": "resource/mySQL.png"},
        {"name": "oracle", "type": database_type, "progress_max": 400, "image": "resource/oracle.png"},
        {"name": "mongo db", "type": database_type, "progress_max": 400, "image": "resource/mongo_db.png"},
        {"name": "redis", "type": database_type, "progress_max": 400, "image": "resource/redis.png"},
        {"name": "postgreSQL", "type": database_type, "progress_max": 400, "image": "resource/postgreSQL.png"},    
      ]

      for data in initial_resource_data:
        Resource.objects.create(**data)