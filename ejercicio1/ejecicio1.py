import sys


def factors(integer):
    """Return a list of numbers that are factors of an 
    given integer
    """
    # We return the list 
    return [candidate for candidate in range(1, integer) if not integer % candidate]


def is_perfect_abundant_or_defective(integer):
    """Prints a message for the user defining if a given integer is
    perfect, abundant or defective
    """
    # The numbers 0 and 1 
    if integer == 0 or integer == 1:
        print "%d is a special case!" % integer
    else:
        # We obtain the factors
        integer_factors = factors(integer)
        # We obtain the sum of the factors
        sum_factors = sum(integer_factors)
        # If the sum is less than the integer, then it is defective
        if sum_factors < integer:
            print "%d is defective!" % integer
        # If the sum is equal than the integer, then it is perfect
        elif sum_factors == integer:
            print "%d is perfect!" % integer
        # If the sum is greater than the integer, then it is abundant
        elif sum_factors > integer:
            print "%d is abundant!" % integer


def main():
    enteros = map(int, sys.argv[1:])
    map(is_perfect_abundant_or_defective, enteros)


if __name__ == "__main__":
    main()
