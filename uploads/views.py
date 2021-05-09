from django.shortcuts import render
from .forms import UploadForm
from django.http import JsonResponse
# Create your views here.

def home_view(request):
    form = UploadForm(request.POST or None, request.FILES or None)
    context = {
        'form': form,
    }
    return render(request, 'uploads/main.html', context)
