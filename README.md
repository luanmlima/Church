# Reponsividade

## Saber as Unidade de Medidas em Css (CSS UNITS)

Layout Fixo
Px - O pixel faz com que o layout fique mais fixo na tela independente da resolução da tela

Layout Fluido
% - A porcentagem se ajusta ao tamanho total da resolução
auto - Usando o heigth auto ele se auto ajusta com os conteudos na tela
vh Viewport Heigth - Toda a Altura que eu posso ver na tela 
vw Viewport Width - Toda a largura que pode ser vista na tela
max-width - define a largura maxima em que a porcentagem vai ser ajustada de acordo com a resolução  

Textos fixos
1px = 0.75pt
16px = 12pt

Textos fluidos
em - Ele vai ser multiplicado pelo seu pai, exemplo: Pai: header{font-size: 14px} Filho: header nav{font-size: 2em}, o valor de 14px é multiplicado por 2 dando 38px;
rem - multiplicado pelo root, o root pode ser o html, Exemplo: html{font-size: 62.5%}, p{font-size: 1.0 que equivale a 10px do calculo de porcentagem}.


Estrategias

Quando usar porcentagem em containers defina um max-width para ele se ajustar ate o tamanho maximo que vc quer

Use font-size com % na tag html e nos seus filhos utilize rem para fonts e line-heigths, para deixar o site mais fluido de acordo com a resolução da tela