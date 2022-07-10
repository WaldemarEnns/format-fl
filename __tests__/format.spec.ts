import { describe, it, expect } from 'bun:test';
import { format } from '../src/index'

describe('format method', () => {
  it('format WHEN passed number is undefined RETURNS 0,00', () => {
    expect(format(undefined)).toBe('0,00')
  })

  it('format WHEN passed number is null RETURNS 0,00', () => {
    expect(format(null)).toBe('0,00')
  })

  it('format WHEN positions not passed RETURNS number with two positions after comma by default', () => {
    expect(format(2.55555)).toBe('2,56')
  })

  it('format WHEN positions passed RETURNS number with passed amount of positions after comma', () => {
    expect(format(2.555, 2)).toBe('2,56')
  })

  it('format WHEN positions passed RETURNS number with passed amount of positions after comma and correctly rounded values', () => {
    expect(format(2.334432, 3)).toBe('2,334')
    expect(format(2.337906, 5)).toBe('2,33791')
    expect(format('-1.55555', 4)).toBe('-1,5555')
    expect(format(-1.57, 1)).toBe('-1,6')
    expect(format(-1.57, 2)).toBe('-1,57')
    expect(format(-1.55555, 4)).toBe('-1,5555')
  })

  it('format WHEN no furhter formatting rules passed RETURNS number formatted in en-GB way by default', () => {
    expect(format(10000.5555, 3)).toBe('10.000,556')
    expect(format(-10000.5555, 3)).toBe('-10.000,556')
  })

  it('format WHEN formatting rules passed RETURNS number representation with custom passed decimal and thousands representation', () => {
    expect(format(100000.28374, 2, ',', '.')).toBe('100.000,28')
    expect(format(100000.55555, 1, '.', ',')).toBe('100,000.6')
    expect(format(1.555, 10, ',', '.')).toBe('1,5550000000')
  })

  it('format WHEN number passed as string RETURNS correclty formatted floating point number', () => {
    expect(format('1.5555', 2)).toBe('1,56')
    expect(format('0')).toBe('0,00')
  })

  it('format WHEN rounding is set to false RETURNS correctly formatted floating point numbers not rounded', () => {
    expect(format(1.55555, 3, ',', '.', false)).toBe('1,555')
    expect(format(-1.55555, 3, ',', '.', false)).toBe('-1,555')
  })
})