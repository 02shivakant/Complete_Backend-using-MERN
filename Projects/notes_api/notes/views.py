from rest_framework import viewsets , filters
from django_filters.rest_framework import DjangoFilterBackend
from .models import Note
from .serializers import NoteSerializer

class NoteViewSet(viewsets.ModelViewSet):
    queryset = Note.objects.all()
    serializer_class = NoteSerializer

    filter_backends = [
        DjangoFilterBackend , 
        filters.SearchFilter,
        ]
    filterset_fields = ['tag']

    search_field = ['title' , 'content' , 'tags']