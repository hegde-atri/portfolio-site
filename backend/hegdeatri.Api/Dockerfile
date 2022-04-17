FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY ["hegdeatri.Api/hegdeatri.Api.csproj", "hegdeatri.Api/"]
RUN dotnet restore "hegdeatri.Api/hegdeatri.Api.csproj"
COPY . .
WORKDIR "/src/hegdeatri.Api"
RUN dotnet build "hegdeatri.Api.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "hegdeatri.Api.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "hegdeatri.Api.dll"]
