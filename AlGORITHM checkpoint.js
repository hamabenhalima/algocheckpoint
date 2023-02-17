AlGORITHM checkpoint
var
str=string;
NC,NW,NV:=INTEGER:=0;
i:=INTEGER:=0;
BEGIN
write('read my sentence');
WHILE (str[NC] <> '.') DO;
read(str);
IF (str[NC]= " ") THEN;
NW=NW+1;
END-IF;
IF (str[NC] = ['a','e','i','y','u','o']) THEN;
NV=NV+1;
END_IF;
i++;
END_WHILE
write(NC);
write(NV);
write(NW);
END