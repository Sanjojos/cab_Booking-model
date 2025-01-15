from django.shortcuts import render
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import customers  
from .serializers import CustomersSerializer
from .serializers import BookSerializer

@api_view(['POST'])
def reg(request):
   
    serializer = CustomersSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({'msg': 'Saved successfully'}, status=status.HTTP_201_CREATED)  
    return Response({'msg': 'Data not valid', 'errors': serializer.errors}, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT'])
def update(request, id):
    try:
        instance = customers .objects.get(id=id)  
    except customers .DoesNotExist:
        return Response({"error": "Not found"}, status=status.HTTP_404_NOT_FOUND)
    
    serializer = CustomersSerializer(instance, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def display(request):
    data = customers .objects.all()  
    serializer = CustomersSerializer(data, many=True, context={"request": request})
    return Response(serializer.data)

@api_view(['DELETE'])
def dele(request, id):
    try:
        instance = customers .objects.get(id=id)
    except customers .DoesNotExist:
        return Response({"error": "Not found"}, status=status.HTTP_404_NOT_FOUND)
    
    instance.delete()
    return Response({"data": "Deleted"}, status=status.HTTP_204_NO_CONTENT)  
@api_view(['POST'])
def book(request):
   
    serializer = BookSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({'msg': 'Saved successfully'}, status=status.HTTP_201_CREATED)  
    return Response({'msg': 'Data not valid', 'errors': serializer.errors}, status=status.HTTP_400_BAD_REQUEST)