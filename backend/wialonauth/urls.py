from django.urls import path
from .views import WialonLoginAPIView

urlpatterns = [
    path('wialon-get-token/', WialonLoginAPIView.as_view(), name='wialon-get-token'),
]
