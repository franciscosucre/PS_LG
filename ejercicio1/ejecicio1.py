import sys

def factores(entero):
    candidatos = [candidato for candidato in range(1, entero)]
    es_divisor = lambda candidato : not (entero % candidato)
    return filter(es_divisor, candidatos)

def es_perfect_abundante_o_perfecto(entero):
    if entero == 0 or entero == 1:
        print "%d es un caso especial!" % entero
        return
    factores_entero = factores(entero)
    suma_factores = sum(factores_entero)

    if suma_factores < entero:
        print "%d es defectivo!" % entero
    elif suma_factores == entero:
        print "%d es perfecto!" % entero
    elif suma_factores > entero:
        print "%d es abundante!" % entero
    else:
        print "%d NO es ni defectivo, perfecto o abundante!" % entero

def main():
    enteros = map(int, sys.argv[1:])
    map(es_perfect_abundante_o_perfecto, enteros)

if __name__ == "__main__":
    main()
