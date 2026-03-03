from datetime import datetime, date, time
from typing import Any, List, Optional, Union, Set
from enum import Enum
from pydantic import BaseModel, field_validator


############################################
# Enumerations are defined here
############################################

############################################
# Classes are defined here
############################################
class AuthorCreate(BaseModel):
    name: str
    books: List[int]  # N:M Relationship


class LibraryCreate(BaseModel):
    name: str
    books: List[int]  # N:M Relationship


class BookCreate(BaseModel):
    stock: int
    time: time
    release: date
    price: float
    pages: int
    title: str
    library: List[int]  # N:M Relationship
    authors: List[int]  # N:M Relationship

    @field_validator('pages')
    @classmethod
    def validate_pages_1(cls, v):
        """OCL Constraint: constraint_Book_0_1"""
        if not (v > 10):
            raise ValueError('pages must be > 10')
        return v

